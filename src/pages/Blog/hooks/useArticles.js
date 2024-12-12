import { useState, useEffect } from 'react';

const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = () => {
      setLoading(true);
      setTimeout(() => {
        try {
          const fetchedArticles = [
            {
              id: 1,
              title: 'Модні тренди 2025 року',
              description: 'Огляд основних трендів моди на наступний рік.',
              link: 'https://lurex.in.ua/uk/novosti/sem-trendovyh-priemov-dlja-sozdanija-zhenstvennogo-obraza-v-sezone-2025',
            },
            {
              id: 2,
              title: 'Як створити ідеальний гардероб',
              description: 'Поради щодо формування базового гардеробу.',
              link: 'https://www.helena.ua/uk/articles/Vse-o-mode/prakticnist-i-zinocnist-osnovi-idealnogo-obrazu/',
            },
            {
              id: 3,
              title: 'Догляд за одягом',
              description: 'Як правильно доглядати за різними матеріалами.',
              link: 'https://ah.com.ua/osnovni-pravila-dogljadu-za-odjagom/',
            },
            {
              id: 4,
              title: 'Як вибрати одяг для різних сезонів',
              description: 'Практичні поради щодо вибору одягу для будь-якої погоди.',
              link: 'https://zolochiv.net/yak-vybraty-odiah-shchob-vin-zalyshavsia-aktualnym-kilka-sezoniv/',
            },
            {
              id: 5,
              title: 'Мінімалізм у гардеробі',
              description: 'Як позбутися зайвого одягу та створити стильний і практичний гардероб.',
              link: 'https://www.aviatsiyahalychyny.com/blog/minimalizm-u-harderobi/',
            },
            {
              id: 6,
              title: '10 способів носити одну річ по-різному',
              description: 'Ідеї для створення багатьох образів з одного предмета одягу.',
              link: 'https://www.stb.ua/ua/2024/06/11/yak-nosyty-odnu-rich-riznymy-sposobamy-bagatofunktsionalnist-v-modi/',
            },
            {
              id: 7,
              title: 'Догляд за взуттям: поради на кожен день',
              description: 'Як зберегти улюблене взуття в ідеальному стані.',
              link: 'https://yuki.ua/blog/pravyla-dohliadu-za-vzuttiam/',
            },
            {
              id: 8,
              title: 'Еко-матеріали в одязі',
              description: 'Що таке еко-матеріали і чому вони важливі для довкілля.',
              link: 'https://issaplus.com/ua/blog/yeko-stil-v-odyaz/',
            },
            {
              id: 9,
              title: 'Мистецтво складання валізи',
              description: 'Як зібрати все необхідне і уникнути зайвих речей у поїздці.',
              link: 'https://waliza.com.ua/mystecztvo-upakovky-valizy-abo-praktychni-porady-dlya-kozhnoyi-podorozhi/',
            },
            {
              id: 10,
              title: 'Вибір правильного прання для різних тканин',
              description: 'Керівництво для догляду за різними видами тканин.',
              link: 'https://gayka.com.ua/blog-majstra/vyibor-pravilnogo-czikla-stirki.html',
            },
          ];

          setArticles(fetchedArticles);
        } catch (err) {
          setError('Не вдалося завантажити статті');
        } finally {
          setLoading(false);
        }
      }, 1000);
    };

    fetchArticles();
  }, []);

  return { articles, loading, error };
};

export { useArticles };
