import { useState, useEffect } from 'react';

export function App() {
  const cat_random_fact = 'https://catfact.ninja/fact';

  const [fact, setFact] = useState();
  const [imageCat, setImageCat] = useState();

  useEffect(() => {
    fetch(cat_random_fact)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);

        const firstWord = fact.split(' ')[0];
        const cat_image_url = `https://cataas.com/cat/says/${firstWord}?fontSize=40&fontColor=gray`;

        setImageCat(cat_image_url);
      });
  }, []);

  return (
    <>
      <h1>APP de Gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageCat && (
        <img
          src={imageCat}
          alt={`Imagen de gato que contiene la primera palabra del hecho__"${fact}"`}
        />
      )}
    </>
  );
}
