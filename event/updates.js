function addNewItem(tabType, title, description, link, buttonText) {

  const listItem = document.createElement('li');
  listItem.classList.add('p-10');


  const titleElement = document.createElement('h6');
  titleElement.innerHTML = `<span>${title}</span>`;
  listItem.appendChild(titleElement);


  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = description;
  listItem.appendChild(descriptionElement);


  if (link) {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = buttonText;
    buttonElement.classList.add('tab-more-button', 'price-dec', 'hvr-float-shadow', 'bg-info');
    buttonElement.addEventListener('click', () => {
      window.open(link, '_blank');
    });
    listItem.appendChild(buttonElement);
  }


  const tabBlock = document.querySelector(`#${tabType} .tab-block`);


  const previousItem = tabBlock.lastChild;
  if (previousItem) {
    tabBlock.insertBefore(document.createElement('hr'), previousItem.nextSibling);
  }
  document.querySelector('hr').classList.add('hr');


  tabBlock.appendChild(listItem);
}



//Events


let currentIndex = 0;
const eventItems = [{
    title: 'Notice Regarding Orientation Cum Induction Program',
    description: 'Notice',
    link: 'http://www.mmmut.ac.in/News_content/51201news_09212023.pdf',
    buttonText: 'VIEW..'
  },
  {
    title: 'Live webcasting of MMMUT 8th Convocation-2023 on 19-09-2023 at 10:00 AM',
    description: '19th September 2023',
    link: 'https://www.youtube.com/watch?v=TobiCVMpb0k',
    buttonText: 'Watch..'
  },
  {
    title: 'Eighth Convocation Celebration',
    description: 'on 19th September 2023',
    link: 'News_content/24134news_09012023.pdf',
    buttonText: 'VIEW..'
  },
  {
    title: 'RESULT OF ALL SEMESTERS',
    description: 'Username: student & Password: student',
    link: 'http://172.16.1.250:8081/jasperserver/login.html',
    buttonText: 'LOGIN'
  },
  {
    title: 'Game Of Codes: Codechef MMMUT Chapter',
    description: 'on 14th September 2023',
    link: 'News_content/24134news_09012023.pdf',
    buttonText: 'REGISTER'
  },
  {
    title: 'Eighth Convocation Celebration',
    description: 'on 19th September 2023',
    link: 'News_content/24134news_09012023.pdf',
    buttonText: 'More..'
  },
  {
    title: 'RESULT OF ALL SEMESTERS',
    description: 'Username: student & Password: student',
    link: 'http://172.16.1.250:8081/jasperserver/login.html',
    buttonText: 'More..'
  },
  {
    title: 'Game Of Codes : Codechef MMMUT Chapter',
    description: 'on 14th September 2023',
    link: 'News_content/24134news_09012023.pdf',
    buttonText: 'REGISTER'
  },
  {
    title: 'Eighth Convocation Celebration',
    description: 'on 19th September 2023',
    link: 'News_content/24134news_09012023.pdf',
    buttonText: 'More..'
  },
  {
    title: 'RESULT OF ALL SEMESTERS',
    description: 'Username: student & Password: student',
    link: 'http://172.16.1.250:8081/jasperserver/login.html',
    buttonText: 'Login'
  },
  {
    title: 'Eighth Convocation Celebration',
    description: 'on 19th September 2023',
    link: 'News_content/24134news_09012023.pdf',
    buttonText: 'More..'
  },
  {
    title: 'Game Of Codes : Codechef MMMUT Chapter',
    description: 'on 14th September 2023',
    link: 'News_content/24134news_09012023.pdf',
    buttonText: 'REGISTER'
  }
];



//NEWS

const newsItems = [
  {
    title: 'Notice Regarding Orientation Cum Induction Program',
    description: 'Notice',
    link: 'http://www.mmmut.ac.in/News_content/51201news_09212023.pdf',
    buttonText: 'VIEW..'
  },
  {
    title: 'Live webcasting of MMMUT 8th Convocation-2023 on 19-09-2023 at 10:00 AM',
    description: '19th September 2023',
    link: 'https://www.youtube.com/watch?v=TobiCVMpb0k',
    buttonText: 'Watch..'
  },
  {
    title: 'Eighth Convocation Celebration',
    description: 'on 19th September 2023',
    link: 'News_content/24134news_09012023.pdf',
    buttonText: 'VIEW..'
  },
  {
    title: 'RESULT OF ALL SEMESTERS',
    description: 'Username: student & Password: student',
    link: 'http://172.16.1.250:8081/jasperserver/login.html',
    buttonText: 'LOGIN'
  },
  {
    title: 'Game Of Codes: Codechef MMMUT Chapter',
    description: 'on 14th September 2023',
    link: 'News_content/24134news_09012023.pdf',
    buttonText: 'REGISTER'
  },
  {
    title: 'Eighth Convocation Celebration',
    description: 'on 19th September 2023',
    link: 'News_content/24134news_09012023.pdf',
    buttonText: 'More..'
  },
  {
    title: 'RESULT OF ALL SEMESTERS',
    description: 'Username: student & Password: student',
    link: 'http://172.16.1.250:8081/jasperserver/login.html',
    buttonText: 'More..'
  },
  {
    title: 'Game Of Codes : Codechef MMMUT Chapter',
    description: 'on 14th September 2023',
    link: 'News_content/24134news_09012023.pdf',
    buttonText: 'REGISTER'
  },
  {
    title: 'Eighth Convocation Celebration',
    description: 'on 19th September 2023',
    link: 'News_content/24134news_09012023.pdf',
    buttonText: 'More..'
  },
  {
    title: 'RESULT OF ALL SEMESTERS',
    description: 'Username: student & Password: student',
    link: 'http://172.16.1.250:8081/jasperserver/login.html',
    buttonText: 'Login'
  },
  {
    title: 'Eighth Convocation Celebration',
    description: 'on 19th September 2023',
    link: 'News_content/24134news_09012023.pdf',
    buttonText: 'More..'
  },
  {
    title: 'Game Of Codes : Codechef MMMUT Chapter',
    description: 'on 14th September 2023',
    link: 'News_content/24134news_09012023.pdf',
    buttonText: 'REGISTER'
  },
  {
    title: 'Important Notice for Induction Program',
    description: '21 September 2023',
    link: 'http://www.mmmut.ac.in/News_content/44324news_09222023.pdf',
    buttonText: 'More..'
  },
  {
    title: 'Anti-Ragging Duty List',
    description: 'NOTICE',
    link: 'http://www.mmmut.ac.in/News_content/14040news_09182023.pdf',
    buttonText: 'More..'
  },
  {
    title: 'Important Notice for Newly Admitted Students Session 2023-24',
    description: 'NOTICE',
    link: 'http://www.mmmut.ac.in/News_content/45340news_09142023.pdf',
    buttonText: 'More..'
  },
  {
    title: 'Final Result of written exam for Assistant Professor (Contractual)',
    description: 'on 16th September 2023',
    link: 'http://www.mmmut.ac.in/News_content/00003news_08022023.pdf',
    buttonText: 'More..'
  }
 
];


function scrollEventItems() {

  if (currentIndex >= eventItems.length) {
    
    return;
    
  } else {
    const tabBlock = document.querySelector('#events .tab-block');
    const eventItem = eventItems[currentIndex];
    const newsItem = newsItems[currentIndex];
    addNewItem('events', eventItem.title, eventItem.description, eventItem.link, eventItem.buttonText);
    if (currentIndex <= newsItems.length){
      addNewItem('news', newsItem.title, newsItem.description, newsItem.link, newsItem.buttonText);

    }

   

    if (tabBlock.children.length > 2) {
      tabBlock.removeChild(tabBlock.firstChild);
    }

    currentIndex++;
  }
}

// Initial scroll
scrollEventItems();
const scrollInterval = setInterval(scrollEventItems, 1000);

// FORMAT -> addNewItem('Events', 'Event Title', 'Event Description', 'https://example.com', 'Button text');


