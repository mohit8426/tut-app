import React from 'react';
import Header from './components/Header';
import TutorialCard from './components/TutorialCard';
import './App.css'; // Add a CSS file for styling




function Main() {
  // Example tutorial data (you might fetch this from an API later)
  const tutorials = [
      { title: 'React Native Android and IOS WindowsOS', description: '', link: './Blog' },
      { title: 'React Native Android and IOS MacOS', description: '', link: './Blog1' },
      { title: 'React Native Firebase Auth and Google Sign in', description: '', link: './Firebase' },
      { title: 'React Native Ecommerce Furniture Component', description: '', link: './EcommerceTutorial' },
      { title: 'React Native Firebase Firestore Storage', description: '', link: './FirestoreTutorial' },
      { title: 'React Native Furniture Shopping Cart Implementation', description: '', link: './ShoppingCart' },
      { title: 'Pipeline Configuration ', description: '', link: './Pipeline' },
      { title: 'DataCleaning Notebook Example ', description: '', link: './DataCleaning' },
      // Add more tutorials here
  ];

 return (
     <div className="App">
         <Header />
         <main>
            <section className="tutorial-list">
               {tutorials.map((tutorial) => (
                  <TutorialCard key={tutorial.title} {...tutorial} />
               ))} 
            </section>
         </main>
     </div>
 );
}

export default Main;
