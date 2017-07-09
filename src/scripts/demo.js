module.exports = {
    listProjects: name => {
        const greeting = `Hi, ${name}. Here are your projects:`;

        //get contents of parent directory
        require('fs').readdir('../', function(err, projectList) {
            //send new data to viewmodel for deep merge
            mergeStore({greeting, projectList});
        })
    },
    add: arr => {
        //add all elements of input array
        const sum = arr.reduce((sum, value) => sum + parseInt(value), 0);

        //send new data to viewmodel for deep merge
        mergeStore({sum});
    }
};