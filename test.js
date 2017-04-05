var Docker = require('dockerode');
var docker = new Docker({socketPath: '/var/run/docker.sock'});


docker.listContainers(function (err, containers) {
    containers.forEach(function (containerInfo) {
        if (containerInfo.Image.includes('mark')) {
            console.log(containerInfo)
        }
    });
});

