// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-философия",
        
          title: "Философия",
        
        description: "Характеризация",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/philosophy/";
          
        },
      },{id: "post-конференция-в-лиссабоне",
        
          title: "Конференция в Лиссабоне",
        
        description: "Ноябрь",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/conference/";
          
        },
      },{id: "post-предисловие",
        
          title: "Предисловие",
        
        description: "Вводный пост",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/introduction/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-день-рождения-сайта",
          title: 'День рождения сайта!',
          description: "",
          section: "News",},{id: "news-у-меня-есть-несколько-старых-блог-постов-буду-их-компилировать-склеивать-дорабатывать-и-скидывать-сюда-потом-буду-выкладывать-что-нибудь-новое",
          title: 'У меня есть несколько старых блог постов, буду их компилировать, склеивать, дорабатывать и...',
          description: "",
          section: "News",},];
