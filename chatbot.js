// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

// Add event listener to input form
inputForm.addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault();

  // Get user input
  const input = inputField.value;

  // Clear input field
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  // Add user input to conversation
  let message = document.createElement('div');
  message.classList.add('chatbot-message', 'user-message');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
  conversation.appendChild(message);

  // Generate chatbot response
  const response = generateResponse(input);

  // Add chatbot response to conversation
  message = document.createElement('div');
  message.classList.add('chatbot-message','chatbot');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
  conversation.appendChild(message);
  message.scrollIntoView({behavior: "smooth"});
});

// Generate chatbot response function
function generateResponse(input) {
    // Add chatbot logic here
    if (input == "hello"){
      return "Hello There!"
    } else if (input == "hi"){
      return "Hello There!"
    } else if (input == "bye"){
      return "see you"
   
    } else if (input == "what is G20"){////11111111111111111
      return "The G20, is an international forum comprising 19 individual countries and the European Union. It brings together major advanced and emerging economies from different regions of the world to discuss and coordinate global economic policy. The G20 countries represent a significant portion of the world's economy, accounting for approximately 85% of global GDP and about two-thirds of the world's population."
    } else if (input == "what is G20?"){
      return "The G20, is an international forum comprising 19 individual countries and the European Union. It brings together major advanced and emerging economies from different regions of the world to discuss and coordinate global economic policy. The G20 countries represent a significant portion of the world's economy, accounting for approximately 85% of global GDP and about two-thirds of the world's population."
    
    } else if (input == "what is the aim of G20"){//////////////222222222
      return "The main aim of the G20,  is to promote international economic cooperation and foster financial stability among its member countries. The G20 seeks to address global economic challenges and find collective solutions to issues that impact the global economy."
    } else if (input == "what is the aim of G20?"){
      return "The main aim of the G20,  is to promote international economic cooperation and foster financial stability among its member countries. The G20 seeks to address global economic challenges and find collective solutions to issues that impact the global economy."
   
    } else if (input == "what is the motto of this year's G20 summit?"){//3333
      return "The theme of India's G20 Presidency - “Vasudhaiva Kutumbakam” or “One Earth · One Family · One Future” - is drawn from the ancient Sanskrit text of the Maha Upanishad."
    } else if (input == "what is the motto of this year's G20 summit"){
      return "The theme of India's G20 Presidency - “Vasudhaiva Kutumbakam” or “One Earth · One Family · One Future” - is drawn from the ancient Sanskrit text of the Maha Upanishad."
   
    } else if (input == "who are the members of G20?"){///4
      return "The Group of Twenty (G20) comprises 19 countries (Argentina, Australia, Brazil, Canada, China, France, Germany, India, Indonesia, Italy, Japan, Republic of Korea, Mexico, Russia, Saudi Arabia, South Africa, Türkiye, United Kingdom and United States) and the European Union. The G20 members represent around 85% of the global GDP, over 75% of the global trade, and about two-thirds of the world population"
    } else if (input == "who are the members of G20"){
      return "The Group of Twenty (G20) comprises 19 countries (Argentina, Australia, Brazil, Canada, China, France, Germany, India, Indonesia, Italy, Japan, Republic of Korea, Mexico, Russia, Saudi Arabia, South Africa, Türkiye, United Kingdom and United States) and the European Union. The G20 members represent around 85% of the global GDP, over 75% of the global trade, and about two-thirds of the world population"

    } else if (input == "what is this year's  G20 logo?"){//5
      return "see The G20 Logo draws inspiration from the vibrant colours of India’s national flag – saffron, white and green, and blue. It juxtaposes planet Earth with the lotus, India’s national flower that reflects growth amid challenges. The Earth reflects India’s pro-planet approach to life, one in perfect harmony with nature. Below the G20 logo is “Bharat”, written in the Devanagari script."
    } else if (input == "what is this year's G20 logo"){
      return "The G20 Logo draws inspiration from the vibrant colours of India’s national flag – saffron, white and green, and blue. It juxtaposes planet Earth with the lotus, India's national flower that reflects growth amid challenges. The Earth reflects India’s pro-planet approach to life, one in perfect harmony with nature. Below the G20 logo is “Bharat”, written in the Devanagari script."
   
    } else if (input == "what happens at a G20 summit?"){////6
      return "It is focused on several core issues around which its leaders hope to reach a consensus for collective action. The goal is to conclude the two-day gathering by issuing a joint statement committing its members to action, although the declaration is not legally binding. But one-on-one meetings can overshadow official business."
    } else if (input == "what happens at a G20 summit"){
      return "It is focused on several core issues around which its leaders hope to reach a consensus for collective action.The goal is to conclude the two-day gathering by issuing a joint statement committing its members to action, although the declaration is not legally binding. But one-on-one meetings can overshadow official business."
   
    } else if (input == "what have been the G20s perceived achievements?"){///7
      return "The leaders summits usually have a number of overarching themes. In Buenos Aires in 2018, these were “the future of work, infrastructure for development and a sustainable food future”.The 2019 G20 summit discussed eight themes: global economy, trade and investment, innovation, environment and energy, employment, women's empowerment, development, and health.However, the real work often occurs on the sidelines, such as when Presidents Xi Jinping and Donald Trump held a working dinner in Argentina in 2018 and postponed a tariff increase in the trade war.The G20 was also credited with helping avert a shift to protectionism post-global financial crisis in 2008, tripling the International Monetary Fund’s budget and giving development banks more remit."
    } else if (input == "what have been the G20s perceived achievements"){
      return "The leaders summits usually have a number of overarching themes. In Buenos Aires in 2018, these were “the future of work, infrastructure for development and a sustainable food future”. The 2019 G20 summit discussed eight themes: global economy, trade and investment, innovation, environment and energy, employment, women's empowerment, development, and health.However, the real work often occurs on the sidelines, such as when Presidents Xi Jinping and Donald Trump held a working dinner in Argentina in 2018 and postponed a tariff increase in the trade war.The G20 was also credited with helping avert a shift to protectionism post-global financial crisis in 2008, tripling the International Monetary Fund’s budget and giving development banks more remit."
   
    } else if (input == "what is the full form of G20?"){////8
      return "Group of Twenty"
    } else if (input == "what is the full form of G20"){
      return "Group of Twenty"
   
    } else if (input == "which countries are invited for this year's G20 summit?"){//9
      return "The invited countries are Bangladesh , Egypt, Mauritius, Netherlands, Nigeria, Oman, Singapore, Spain, UAE"
    } else if (input == "which countries are invited for this year's G20 summit"){
      return "The invited countries are Bangladesh , Egypt, Mauritius, Netherlands, Nigeria, Oman, Singapore, Spain, UAE"
   
    } else if (input == "where and how often does the G20 summit take place?"){///10
      return "The G20 Summit takes place annually in different locations around the world. Each year, one of the member countries hosts the G20 Summit, and the location of the summit rotates among the member countries. The host country for a particular year has the responsibility of organizing and conducting the summit.The G20 Summits typically occur in the latter half of the year, and the specific dates are determined by the host country. The summits bring together the leaders of the G20 member countries to discuss and address various global economic challenges and issues."
    }else if (input == "where and how often does the G20 summit take place"){
      return "The G20 Summit takes place annually in different locations around the world. Each year, one of the member countries hosts the G20 Summit, and the location of the summit rotates among the member countries. The host country for a particular year has the responsibility of organizing and conducting the summit.The G20 Summits typically occur in the latter half of the year, and the specific dates are determined by the host country. The summits bring together the leaders of the G20 member countries to discuss and address various global economic challenges and issues."
   
    }else if (input == "what are the goals and objectives of india's G20 presidency?"){////11
      return "the goals and objectives of India's G20 Presidency are Inclusive Economic Growth and Sustainable Development , Digital Transformation and Technological Innovation, Climate Change and Renewable Energy"
    }else if (input == "what are the goals and objectives of india's G20 presidency"){
      return "the goals and objectives of India's G20 Presidency are Inclusive Economic Growth and Sustainable Development , Digital Transformation and Technological Innovation, Climate Change and Renewable Energy"
   
    }else if (input == "how does the G20 address global economic challenges?"){///12
      return "The G20 addresses global economic challenges through its annual summits, working groups, and ministerial meetings, where the leaders and representatives of member countries come together to discuss and coordinate on various economic issues."
    }else if (input == "how does the G20 address global economic challenges"){
      return "The G20 addresses global economic challenges through its annual summits, working groups, and ministerial meetings, where the leaders and representatives of member countries come together to discuss and coordinate on various economic issues."
   
    }else if (input == "what is the G20 Finance Track ?"){///13
      return "The G20 Finance Track is one of the integral components of the G20 process. It is a series of meetings and discussions focused on economic and financial matters, involving finance ministers and central bank governors from the G20 member countries. "
    }else if (input == "what is the G20 finance track ?"){
      return "The G20 Finance Track is one of the integral components of the G20 process. It is a series of meetings and discussions focused on economic and financial matters, involving finance ministers and central bank governors from the G20 member countries. "
    }else if (input == "what is the G20 Finance Track "){
      return "The G20 Finance Track is one of the integral components of the G20 process. It is a series of meetings and discussions focused on economic and financial matters, involving finance ministers and central bank governors from the G20 member countries. "
    }else if (input == "what is the G20 finance track "){
      return "The G20 Finance Track is one of the integral components of the G20 process. It is a series of meetings and discussions focused on economic and financial matters, involving finance ministers and central bank governors from the G20 member countries. "
   
    } else if (input == "how does the G20 promote international cooperation among member countries?"){
      return "The G20 promotes international cooperation among member countries through its annual summits, informal and open discussions, joint communiqués, working groups and task forces, policy coordination, knowledge sharing, engagement with international organizations, guest invitations, crisis management, and addressing global challenges. These mechanisms foster a spirit of cooperation and collaboration, allowing member countries to work together towards shared goals for global economic stability, sustainable growth, and development."
    } else if (input == "how does the G20 promote international cooperation among member countries"){
      return "The G20 promotes international cooperation among member countries through its annual summits, informal and open discussions, joint communiqués, working groups and task forces, policy coordination, knowledge sharing, engagement with international organizations, guest invitations, crisis management, and addressing global challenges. These mechanisms foster a spirit of cooperation and collaboration, allowing member countries to work together towards shared goals for global economic stability, sustainable growth, and development."
   
    } else if (input == "which countries typically host the G20 summit?"){//15
      return "The G20 Summit is typically hosted by one of the member countries of the G20. The host country for each G20 Summit is responsible for organizing and conducting the event. The selection of the host country rotates among the G20 members, ensuring that each member country gets an opportunity to host the summit over time."
    } else if (input == "which countries typically host the G20 summit"){
      return "The G20 Summit is typically hosted by one of the member countries of the G20. The host country for each G20 Summit is responsible for organizing and conducting the event. The selection of the host country rotates among the G20 members, ensuring that each member country gets an opportunity to host the summit over time."
    } else if (input == "who represents india at the G20 summits?"){
      return "India is represented at the G20 Summits by Shri Narendra Modi, the Honourable Prime Minister of India"
   
    } else if (input == "who represents india at the G20 summits"){//16
      return "India is represented at the G20 Summits by Shri Narendra Modi, the Honourable Prime Minister of India"
    } else if (input == "which country is hosting this year's G20 summit?"){
      return "India is hosting this year's G20 summit"
   
    } else if (input == "which country is hosting this year's G20 summit"){//17
      return "India is hosting this year's G20 summit"
    
    }else if (input == "what role does the host country play during the G20 summit?"){//18
      return "The host country of the G20 Summit is responsible for organizing and facilitating the event, setting the agenda, chairing meetings, facilitating discussions, drafting joint communiqués, inviting guest countries and organizations, promoting outreach and engagement, and coordinating crisis management efforts if needed."
    }else if (input == "what role does the host country play during the G20 summit"){
      return "The host country of the G20 Summit is responsible for organizing and facilitating the event, setting the agenda, chairing meetings, facilitating discussions, drafting joint communiqués, inviting guest countries and organizations, promoting outreach and engagement, and coordinating crisis management efforts if needed."
    
    }else if (input == "when was the first G20 summit held?"){//19
      return "he first G20 Summit was held on November 15-16, 2008, in Washington, D.C., United States. "
    }else if (input == "when was the first G20 summit held"){
      return "he first G20 Summit was held on November 15-16, 2008, in Washington, D.C., United States. "
    
    }else if (input == "how often does the G20 summit take place?"){//20
      return "The G20 Summit takes place once a year."
    }else if (input == "how often does the G20 summit take place"){
      return "The G20 Summit takes place once a year."
   
    }else if (input == "how are decisions made within the G20 group?"){
      return "Decisions within the G20 group are made through consensus among the member countries in an informal setting. The G20 operates on a non-binding basis, and decisions are politically significant but not legally binding."
    } else if (input == "how are decisions made within the G20 group"){
      return "Decisions within the G20 group are made through consensus among the member countries in an informal setting. The G20 operates on a non-binding basis, and decisions are politically significant but not legally binding."
    
    }else if (input == "what is the significance of india's participation in the G20 and how does it benefit the country's economy and international standing?"){
      return "India's participation in the G20 is significant as it allows the country to engage in global economic discussions, influence policies, attract investments, strengthen economic ties, and enhance its international standing as a major economic player. It provides opportunities for economic diplomacy, knowledge sharing, and addressing global challenges, ultimately benefiting India's economy and influence on the world stage."
    }else if (input == "what is the significance of india's participation in the G20 and how does it benefit the country's economy and international standing"){
      return "India's participation in the G20 is significant as it allows the country to engage in global economic discussions, influence policies, attract investments, strengthen economic ties, and enhance its international standing as a major economic player. It provides opportunities for economic diplomacy, knowledge sharing, and addressing global challenges, ultimately benefiting India's economy and influence on the world stage."
   
    }else if (input == "who is the developer of this chatbot?"){
      return "This chatbot was developed by K Dharun of Class 9-B"
    }else if (input == "who is the developer of this chatbot"){
      return "This chatbot was developed by K Dharun of Class 9-B"
    }else if (input == "who is the creator of this chatbot?"){
      return "This chatbot was developed by K Dharun of Class 9-B"
    }else if (input == "who is the creator of this chatbot"){
      return "This chatbot was developed by K Dharun of Class 9-B"
    } else 
    return "Try asking something else"
    
    // Return a random response
    return responses[Math.floor(Math.random() * responses.length)];
}