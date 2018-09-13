var cmd=require('node-cmd');
var path = require('path');

var htmlPreset = " --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype --minify-css true --minify-js true ";

//Scripts
cmd.run('uglifyjs '+path.resolve(__dirname+'/public/scripts/ProgramSide.js')+ " -o "+ path.resolve(__dirname +'/public-minified/scripts/ProgramSide.js'));
cmd.run('uglifyjs '+path.resolve(__dirname+'/public/scripts/cookie.js')+ " -o "+ path.resolve(__dirname +'/public-minified/scripts/cookie.js'));
cmd.run('uglifyjs '+path.resolve(__dirname+'/public/scripts/Index.js')+ " -o "+ path.resolve(__dirname +'/public-minified/scripts/Index.js'));
cmd.run('uglifyjs '+path.resolve(__dirname+'/public/scripts/QuizSide.js')+ " -o "+ path.resolve(__dirname +'/public-minified/scripts/QuizSide.js'));
cmd.run('uglifyjs '+path.resolve(__dirname+'/public/scripts/UddannelseSide.js')+ " -o "+ path.resolve(__dirname +'/public-minified/scripts/UddannelseSide.js'));
cmd.run('uglifyjs '+path.resolve(__dirname+'/public/scripts/Virksomhedsside.js')+ " -o "+ path.resolve(__dirname +'/public-minified/scripts/Virksomhedsside.js'));
cmd.run('uglifyjs '+path.resolve(__dirname+'/public/sw.js')+ " -o "+ path.resolve(__dirname +'/public-minified/sw.js'));

console.log('html-minifier '+path.resolve(__dirname+'/public/QuizSide.html') + htmlPreset + " -o "+path.resolve(__dirname +'/public-minified/QuizSide.html'));

//Styles
cmd.run('postcss '+path.resolve(__dirname+'/public/styles/404.css')+' > '+path.resolve(__dirname +'/public-minified/styles/404.css'));
cmd.run('postcss '+path.resolve(__dirname+'/public/styles/ProgramSide.css')+' > '+path.resolve(__dirname +'/public-minified/styles/ProgramSide.css'));
cmd.run('postcss '+path.resolve(__dirname+'/public/styles/Footer.css')+' > '+path.resolve(__dirname +'/public-minified/styles/Footer.css'));
cmd.run('postcss '+path.resolve(__dirname+'/public/styles/Header.css')+' > '+path.resolve(__dirname +'/public-minified/styles/Header.css'));
cmd.run('postcss '+path.resolve(__dirname+'/public/styles/Index.css')+' > '+path.resolve(__dirname +'/public-minified/styles/Index.css'));
cmd.run('postcss '+path.resolve(__dirname+'/public/styles/QuizSide.css')+' > '+path.resolve(__dirname +'/public-minified/styles/QuizSide.css'));
cmd.run('postcss '+path.resolve(__dirname+'/public/styles/StyleVirksomheder.css')+' > '+path.resolve(__dirname +'/public-minified/styles/StyleVirksomheder.css'));
cmd.run('postcss '+path.resolve(__dirname+'/public/styles/UddannelseSide.css') +' > '+path.resolve(__dirname +'/public-minified/styles/UddannelseSide.css'));

//console.log('postcss '+path.resolve(__dirname+'/public/styles/404.css')+' > '+path.resolve(__dirname +'/public-minified/styles/404.css'));
//HTML
cmd.run('html-minifier '+path.resolve(__dirname+'/public/404.html') + htmlPreset + " -o "+path.resolve(__dirname +'/public-minified/404.html'));
cmd.run('html-minifier '+path.resolve(__dirname+'/public/ProgramSide.html') + htmlPreset + " -o "+path.resolve(__dirname +'/public-minified/ProgramSide.html'));
cmd.run('html-minifier '+path.resolve(__dirname+'/public/index.html') + htmlPreset + " -o "+path.resolve(__dirname +'/public-minified/index.html'));
cmd.run('html-minifier '+path.resolve(__dirname+'/public/QuizSide.html') + htmlPreset + " -o "+path.resolve(__dirname +'/public-minified/QuizSide.html'));
cmd.run('html-minifier '+path.resolve(__dirname+'/public/UddannelseSide.html') + htmlPreset + " -o "+path.resolve(__dirname +'/public-minified/UddannelseSide.html'));
cmd.run('html-minifier '+path.resolve(__dirname+'/public/Virksomhedsside.html') + htmlPreset + " -o "+path.resolve(__dirname +'/public-minified/Virksomhedsside.html'));


//console.log('html-minifier '+path.resolve(__dirname+'/public/Virksomhedsside.html') + htmlPreset + " -o "+path.resolve(__dirname +'/public-minified/Virksomhedsside.html'));
