# This | Dress well
This is a clothes e-commerce.

You can visit the website anytime with the following link: <a href="https://thisclothes.netlify.app/">This e-commerce</a>

<h2>Dependencies:</h2>

<h3><a href="https://cloudinary.com/">Cloudinary</a></h3>
Cloudinary can be used as an online storage where i choose to keep the products' images. It provides a link for each image to be used in the rendering of the items.

<h3><a href="https://firebase.google.com/">Firebase</a></h3>
I use firebase to storage in it's data base (Firestore) all the products shown in this e-commerce including their images links, title, price, stock, description and the category which they belong.

<h3><a href="https://v5.reactrouter.com/web/guides/quick-start">React-Router-Dom</a></h3>
This library generates dynamic routes in order to facilitate the site's navigability.

<h3><a href="https://icons8.com/">Icons8</a></h3>
From Icons8, i used many images for the website. They are all included in the head section.

<h3><a href="https://sweetalert2.github.io/">Sweet alert 2<a></h3>
This library provides beautiful and user friendly alerts which i used in some occasions.

<h3><a href="https://tailwindcss.com/">Tailwind css<a></h3>
With Tailwind css i styled the hole site.

<h2>Hooks:</h2>
useState(from React).
Used to generate local states to the component and also save those states to be able to modify them later.

useEffect(from React).
Used to mount and render components only when they need to be displayed.

useContext (from React).
With useContext i manage to create a context to be able to have inside all the data, states and functions that i want to provide to any component.

useParams (from React-Router-Dom).
With useParams the parameter indicated by the URL is detected.

<h2>Step by step to run with local files the website.</h2>

1. Go to "Code" option above and copy the HTTPS link.

2. In our terminal, choose a repository where the files will be cloned and type:

git clone + (copied link here)

3. From the terminal you must go to the root repository and install all the dependencies using "npm i"

<span style="ackground: grey;">npm i</span>

4. Finally, type in the terminal "npm start". The website will be opened in your browser.

npm start