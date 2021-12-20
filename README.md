About Project:- 
================================
Project-Name : Core,
Tailwind-version: "3.0.5",,
Postcss:"^9.1.0",
Postcss-nano:,
Postcss-nesting:"10.0.3",
Postcss-import:"14.0.2",

Installation Steps
=======================================
1) npm init -y
2) npm install tailwindcss autoprefixer
3) npm install postcss-cli (for postcss preprocesser)
4) npx tailwindcss init -p  (create tailwind and postcss config files)

optional Plugins :- 

1) npm install postcss-nesting  (for nesting css)
2) npm install -D cssnano (for minify)
3) npm install win-node-env (for reduce css file)

Compile tailwindcss.css to custom.css:-
========================================
For build :- npm run build

For watch :- npm run watch (for watch command)

For prod :-  npm run prod (and minify css file and remove unnecessary classes)

==================================

Typography:- 
================================
Colors
1)text-color : #646F87 , #293651 , #FE8464,
2)btn-color : linear-gradient(to right, #fe8464 0%, #fe6e9a 50%, #fe8464 100%) ,
3)outlin-btn-hover : rgba(100, 111, 135, 0.4),

Font-Family
4)font-family :"Open Sans", sans-serif,"Montserrat", sans-serif,