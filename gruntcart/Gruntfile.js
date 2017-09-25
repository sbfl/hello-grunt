module.exports = function(grunt){
    grunt.initConfig({
        jshint:{
            files: ['lib/**/*js','models/**/*.js']
        },
        watch:{
            files: ['lib/**/*js','models/**/*.js'],
            tasks: ['jshint']
        },
        clean: {
            output: ['ToBeCleaned/*']
        }
    });
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");


}