var fs = require("fs");
var request = require("request");
var mime = require('mime-types');
//Code by rama0dev

exports.upload = function (authorization, projectId, file, url, callback) {

    if (Math.floor(fs.statSync(file).size / 1000) >= 261120) {
        callback({
            "status": "error",
            "message": "bigfile",
            "filesize": Math.floor(fs.statSync(file).size / 1000)
        })
    } else {
        function getAuth(type, callback) {
            request({
                url: `https://api.glitch.com/v1/projects/${projectId}/policy?contentType=${type}`,
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": authorization
                },
                method: "GET"
            }, (error, response, body) => {
                body = JSON.parse(body);
                //console.log(body)
                callback(body)
            })
        }

        var type = mime.lookup(file)
        if (Math.floor(fs.statSync(file).size / 1000) >= 16362) {
            cdnlink = 'https://cdn.glitch.me/'
        } else {
            cdnlink = 'https://cdn.glitch.global/'
        }

        getAuth(type, (data) => {
            if (data.code === "Unauthenticated" || data.code === "NOT_FOUND_ERROR") {
                callback({
                    "status": "error",
                    "type": data.code,
                    "message": data.message
                })
            } else {
                request.post(`http://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb`, {
                        headers: {
                            "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryrKZeHVBAFJvaDv2b"
                        },
                        formData: {
                            "key": `${projectId}/${url}`,
                            "Content-Type": type,
                            "Cache-Control": `max-age=31536000`,
                            "AWSAccessKeyId": data["accessKeyId"],
                            "acl": "public-read",
                            "policy": data["policy"],
                            "signature": data["signature"],
                            "file": fs.readFileSync(file)
                        }
                    }).on('error', function (err) {
                        console.log(err.color("BgRed"));
                    })
                    .on('response', function (data) {
                        function getFilesizeInBytes(filename) {
                            var stats = fs.statSync(filename);
                            var fileSizeInBytes = stats.size;
                            return Math.floor((fileSizeInBytes / (1024 * 1024)) * 10) / 10;
                        }
                        callback({
                            "status": "uploaded",
                            "link": `${cdnlink}${projectId}/${url}`,
                            "filesize": Math.floor(fs.statSync(file).size / 1000)
                        })
                    })
            }
        });
    }
}

//Code by rama0dev

//Code by rama0dev

//Code by rama0dev
