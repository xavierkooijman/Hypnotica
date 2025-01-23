import { defineStore } from 'pinia';

export const useNewsStore = defineStore('news', {
  state: () => ({
    news: [
      {
        id: "1",
        title: "The Countdown Begins: Berlin Awaits Hypnotica Festival 2025",
        date: "2024-12-20",
        description: "Berlin prepares for Hypnotica Festival 2025 with over 100 performances and immersive experiences.",
        content: `Berlin, the epicenter of electronic music and cultural innovation, is gearing up for one of the most anticipated events of the year: the Hypnotica Festival 2025. Spanning three electrifying days and nights from January 3 to January 5, 2025, this groundbreaking festival promises to transform the city into a pulsating hub of cutting-edge sound, visual artistry, and unforgettable experiences.`,
        mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijsiOiFCjQzU2O_BFZsBmeG-aoss95AOYuA&s",
        secondaryImages: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3FKx8_aCC4ZtsHjJkfDHBlF0oLmOGMfdFtg&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFd8f8ujWZzkBMYUepmzpgtz4dMuonHgg30g&s"
        ]
      },
      {
        id: "2",
        title: "New York Fashion Week 2025: A Glimpse into the Future of Fashion",
        date: "2025-01-05",
        description: "New York Fashion Week 2025 is redefining the future of fashion with eco-friendly designs and technological innovations.",
        content: `New York Fashion Week 2025 is here, showcasing an exciting blend of futuristic designs, sustainable fashion, and innovative technology. From AI-powered fashion shows to biodegradable fabrics, the event is setting the tone for the future of style.`,
        mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQozidI_Sd1Vq3MFy0IfiN9mjD7rk5Vximg&s",
        secondaryImages: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTw9bQdSddV36J_TWyGXlJUmE2M_xa-YP0Ow&s",
          "https://i0.wp.com/mnmt.no/wp-content/uploads/2016/03/10_10499542_10152668382583755_2186614163480345366_o.jpg?fit=2048%2C1153&ssl=1"
        ]
      },
      {
        id: "3",
        title: "Virtual Reality Takes Center Stage at CES 2025",
        date: "2025-01-10",
        description: "At CES 2025, virtual reality innovations are pushing the boundaries of entertainment, gaming, and education.",
        content: `The Consumer Electronics Show (CES) 2025 in Las Vegas is unveiling cutting-edge virtual reality (VR) technologies. From immersive VR gaming experiences to educational simulations, this year's CES is a glimpse into the next era of digital interactivity.`,
        mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwV33hTx8PWMyzxJoJv8OUYBAAeXhgleC2ww&s",
        secondaryImages: [
          "https://europebookings.com/wp-content/uploads/hideout-festival-papaya-club-stage-lights.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9h3VTFwjD2Evd-EyIOrJKmHwO15eMACRSkg&s"
        ]
      },
      {
        id: "4",
        title: "The Rise of Eco-Tourism: A Sustainable Way to Travel",
        date: "2025-01-08",
        description: "Eco-tourism is on the rise as travelers seek environmentally conscious ways to explore the world.",
        content: `Eco-tourism is rapidly gaining popularity as more people seek to travel sustainably while preserving natural landscapes and wildlife. From eco-friendly hotels to guided nature tours, the future of tourism is green, with travelers making an effort to reduce their carbon footprint.`,
        mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTrNIyuZiQgSMrYYSt9koZ9lYeBJN15cBaw&s",
        secondaryImages: [
          "https://i0.wp.com/thegroovecartel.com/wp-content/uploads/2024/01/rsz_20230611_verknipt_jessewensing_5.jpg?fit=770%2C512&ssl=1",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRklOE-pi2P0iS0-VQoRpAnhXhy-ISUUmv4ow&s"
        ]
      },
      {
        id: "5",
        title: "Breakthrough in Quantum Computing: The Future of Technology",
        date: "2025-01-11",
        description: "Scientists have made a groundbreaking advancement in quantum computing, bringing us closer to a technological revolution.",
        content: `In a historic breakthrough, researchers have developed a new quantum computing method that promises to solve complex problems at unprecedented speeds. This advancement could lead to revolutions in fields like artificial intelligence, cryptography, and medicine.`,
        mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLg0IP_kGJ722M6rxjYJga9NlNBzl_J_hTUQ&s",
        secondaryImages: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMo1c8YmCBXD9QBMIF-Cv-UoK4a19OtCb_yA&s",
          "https://www.technostation.tv/wp-content/uploads/2023/12/351377010_6386273988121268_3776490156528089739_n.jpg"
        ]
      },
      {
        id: "6",
        title: "Exploring Space Tourism: The Final Frontier",
        date: "2025-01-15",
        description: "Space tourism is taking off with private companies offering trips to the edge of space and beyond.",
        content: `Space tourism is becoming a reality with private companies like SpaceX and Blue Origin offering commercial flights to the edge of space. As the industry grows, it promises to offer once-in-a-lifetime experiences for adventure seekers.`,
        mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijsiOiFCjQzU2O_BFZsBmeG-aoss95AOYuA&s",
        secondaryImages: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3FKx8_aCC4ZtsHjJkfDHBlF0oLmOGMfdFtg&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFd8f8ujWZzkBMYUepmzpgtz4dMuonHgg30g&s"
        ]
      },
      {
        id: "7",
        title: "AI-Driven Art: A Revolution in Creativity",
        date: "2025-01-18",
        description: "Artificial intelligence is transforming the world of art, allowing machines to create stunning works of art.",
        content: `Artificial intelligence is pushing the boundaries of creativity, with machines now capable of creating artwork that rivals human artists. AI-driven tools are enabling new forms of digital art, inspiring a new wave of artistic expression.`,
        mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQozidI_Sd1Vq3MFy0IfiN9mjD7rk5Vximg&s",
        secondaryImages: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTw9bQdSddV36J_TWyGXlJUmE2M_xa-YP0Ow&s",
          "https://i0.wp.com/mnmt.no/wp-content/uploads/2016/03/10_10499542_10152668382583755_2186614163480345366_o.jpg?fit=2048%2C1153&ssl=1"
        ]
      },
      {
        id: "8",
        title: "Green Energy Takes Over the World",
        date: "2025-01-22",
        description: "Green energy sources are now dominating the global energy market as we transition to a sustainable future.",
        content: `Solar, wind, and hydroelectric power are leading the charge in the transition to clean and sustainable energy. With technological advancements and lower costs, green energy is becoming the new normal in the global energy landscape.`,
        mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwV33hTx8PWMyzxJoJv8OUYBAAeXhgleC2ww&s",
        secondaryImages: [
          "https://europebookings.com/wp-content/uploads/hideout-festival-papaya-club-stage-lights.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9h3VTFwjD2Evd-EyIOrJKmHwO15eMACRSkg&s"
        ]
      },
      {
        id: "9",
        title: "The Future of Autonomous Vehicles: A New Era of Transportation",
        date: "2025-01-24",
        description: "Autonomous vehicles are set to revolutionize the way we travel, making roads safer and more efficient.",
        content: `Autonomous vehicles (self-driving cars) are now closer to becoming a reality, with major companies testing advanced driver-assistance systems. This innovation promises to reduce traffic accidents, improve fuel efficiency, and transform urban mobility.`,
        mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTrNIyuZiQgSMrYYSt9koZ9lYeBJN15cBaw&s",
        secondaryImages: [
          "https://i0.wp.com/thegroovecartel.com/wp-content/uploads/2024/01/rsz_20230611_verknipt_jessewensing_5.jpg?fit=770%2C512&ssl=1",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRklOE-pi2P0iS0-VQoRpAnhXhy-ISUUmv4ow&s"
        ]
      },
      {
        id: "10",
        title: "Health Tech Innovations: Revolutionizing Medical Treatments",
        date: "2025-01-30",
        description: "Advancements in health tech are changing the landscape of healthcare, offering innovative treatments and improving patient care.",
        content: `From AI-driven diagnostics to telemedicine platforms, health technology is transforming how we access care. These innovations are leading to faster diagnoses, personalized treatments, and better overall health outcomes for patients.`,
        mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLg0IP_kGJ722M6rxjYJga9NlNBzl_J_hTUQ&s",
        secondaryImages: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMo1c8YmCBXD9QBMIF-Cv-UoK4a19OtCb_yA&s",
          "https://www.technostation.tv/wp-content/uploads/2023/12/351377010_6386273988121268_3776490156528089739_n.jpg"
        ]
      },
      {
        id: "11",
        title: "Smart Cities: The Future of Urban Living",
        date: "2025-02-01",
        description: "Smart cities are using technology to improve the quality of life for residents through smarter infrastructure and data-driven solutions.",
        content: `Smart cities are integrating Internet of Things (IoT) technology into urban infrastructure to enhance everything from traffic management to waste disposal. These innovations promise to improve city efficiency, reduce energy consumption, and increase overall quality of life.`,
        mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijsiOiFCjQzU2O_BFZsBmeG-aoss95AOYuA&s",
        secondaryImages: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3FKx8_aCC4ZtsHjJkfDHBlF0oLmOGMfdFtg&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFd8f8ujWZzkBMYUepmzpgtz4dMuonHgg30g&s"
        ]
      },
      {
        id: "12",
        title: "Virtual Concerts: The New Normal in Live Music",
        date: "2025-02-05",
        description: "Virtual concerts are changing the way we experience live music, offering immersive online performances.",
        content: `With advances in virtual reality and streaming technology, virtual concerts are now providing fans with an unprecedented live music experience from the comfort of their homes. This trend is set to continue as more artists embrace virtual performances.`,
        mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQozidI_Sd1Vq3MFy0IfiN9mjD7rk5Vximg&s",
        secondaryImages: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTw9bQdSddV36J_TWyGXlJUmE2M_xa-YP0Ow&s",
          "https://i0.wp.com/mnmt.no/wp-content/uploads/2016/03/10_10499542_10152668382583755_2186614163480345366_o.jpg?fit=2048%2C1153&ssl=1"
        ]
      },
      {
        id: "13",
        title: "The Rise of Sustainable Fashion",
        date: "2025-02-10",
        description: "Sustainable fashion is taking center stage as more brands prioritize eco-friendly materials and ethical production methods.",
        content: `The fashion industry is undergoing a transformation, with designers and brands focusing on sustainable practices. From using organic fabrics to reducing waste, the shift towards sustainable fashion is shaping the future of style.`,
        mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwV33hTx8PWMyzxJoJv8OUYBAAeXhgleC2ww&s",
        secondaryImages: [
          "https://europebookings.com/wp-content/uploads/hideout-festival-papaya-club-stage-lights.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9h3VTFwjD2Evd-EyIOrJKmHwO15eMACRSkg&s"
        ]
      },
      {
        id: "14",
        title: "AI-Powered Healthcare: The Future of Medical Diagnostics",
        date: "2025-02-15",
        description: "AI is revolutionizing healthcare by enhancing diagnostic accuracy and providing personalized treatment options.",
        content: `Artificial intelligence is now being used to detect diseases and recommend personalized treatments faster and more accurately than traditional methods. This technology has the potential to save lives by providing earlier diagnoses.`,
        mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLg0IP_kGJ722M6rxjYJga9NlNBzl_J_hTUQ&s",
        secondaryImages: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMo1c8YmCBXD9QBMIF-Cv-UoK4a19OtCb_yA&s",
          "https://www.technostation.tv/wp-content/uploads/2023/12/351377010_6386273988121268_3776490156528089739_n.jpg"
        ]
      },
      {
        id: "15",
        title: "Exploring the Impact of Climate Change on Global Agriculture",
        date: "2025-02-20",
        description: "Climate change is having a profound impact on agriculture, threatening food security worldwide.",
        content: `As global temperatures rise and weather patterns become more unpredictable, agriculture is facing challenges that threaten food production. Solutions such as drought-resistant crops and sustainable farming techniques are being explored to mitigate these effects.`,
        mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTrNIyuZiQgSMrYYSt9koZ9lYeBJN15cBaw&s",
        secondaryImages: [
          "https://i0.wp.com/thegroovecartel.com/wp-content/uploads/2024/01/rsz_20230611_verknipt_jessewensing_5.jpg?fit=770%2C512&ssl=1",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRklOE-pi2P0iS0-VQoRpAnhXhy-ISUUmv4ow&s"
        ]
      },
      {
        id: "16",
        title: "5G Technology: The Next Generation of Connectivity",
        date: "2025-02-25",
        description: "5G networks are set to transform global connectivity, enabling faster communication and new technologies.",
        content: `5G technology promises to revolutionize how we connect to the internet and interact with digital devices. With faster speeds, lower latency, and greater capacity, 5G is set to power innovations across industries like healthcare, entertainment, and transportation.`,
        mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijsiOiFCjQzU2O_BFZsBmeG-aoss95AOYuA&s",
        secondaryImages: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3FKx8_aCC4ZtsHjJkfDHBlF0oLmOGMfdFtg&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFd8f8ujWZzkBMYUepmzpgtz4dMuonHgg30g&s"
        ]
      },
      {
        id: "17",
        title: "Advancements in Robotics: The Future of Automation",
        date: "2025-03-01",
        description: "Robotic technologies are advancing rapidly, promising to revolutionize industries and improve efficiency.",
        content: `From autonomous delivery drones to robots assisting in surgery, robotics is reshaping various sectors. Automation technologies are streamlining manufacturing, logistics, and healthcare, leading to more efficient and safer processes.`,
        mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQozidI_Sd1Vq3MFy0IfiN9mjD7rk5Vximg&s",
        secondaryImages: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTw9bQdSddV36J_TWyGXlJUmE2M_xa-YP0Ow&s",
          "https://i0.wp.com/mnmt.no/wp-content/uploads/2016/03/10_10499542_10152668382583755_2186614163480345366_o.jpg?fit=2048%2C1153&ssl=1"
        ]
      },
      {
        id: "18",
        title: "The Evolution of Social Media: What's Next?",
        date: "2025-03-05",
        description: "Social media continues to evolve, with new trends and platforms changing the way we communicate.",
        content: `The rise of new social media platforms, along with the evolution of AI and AR technologies, is transforming how we interact online. With greater emphasis on privacy and authenticity, social media is moving toward more immersive and secure experiences.`,
        mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwV33hTx8PWMyzxJoJv8OUYBAAeXhgleC2ww&s",
        secondaryImages: [
          "https://europebookings.com/wp-content/uploads/hideout-festival-papaya-club-stage-lights.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9h3VTFwjD2Evd-EyIOrJKmHwO15eMACRSkg&s"
        ]
      },
      {
        id: "19",
        title: "The World of Virtual Reality Fitness: A New Frontier",
        date: "2025-03-10",
        description: "Virtual reality is revolutionizing the fitness industry, offering immersive workouts and personalized fitness programs.",
        content: `Virtual reality fitness is transforming how we approach exercise, with immersive VR workouts that make fitness fun and engaging. This trend is gaining momentum as more people seek innovative ways to stay fit and active.`,
        mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLg0IP_kGJ722M6rxjYJga9NlNBzl_J_hTUQ&s",
        secondaryImages: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMo1c8YmCBXD9QBMIF-Cv-UoK4a19OtCb_yA&s",
          "https://www.technostation.tv/wp-content/uploads/2023/12/351377010_6386273988121268_3776490156528089739_n.jpg"
        ]
      },
      {
        id: "20",
        title: "Space Exploration: Humanity's Next Giant Leap",
        date: "2025-03-15",
        description: "Space exploration is taking humanity to new frontiers, with missions to Mars and beyond.",
        content: `With new space missions underway, humanity is poised to explore new frontiers beyond Earth. Private companies and government agencies are working together to develop technologies that will take humans to the Moon, Mars, and even further into space.`,
        mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijsiOiFCjQzU2O_BFZsBmeG-aoss95AOYuA&s",
        secondaryImages: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3FKx8_aCC4ZtsHjJkfDHBlF0oLmOGMfdFtg&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFd8f8ujWZzkBMYUepmzpgtz4dMuonHgg30g&s"
        ]
      }
    ],
  }),

  getters: {
    getNewsById: (state) => (id) => {
      return state.news.find(newsItem => newsItem.id == id);
    },
    getAllNews: (state) => {
      return state.news;
    },
  },

  actions: {
    addNews(title,description,content,images) {
      const newsExists = this.news.some(newsItem => newsItem.title == title);
      if (newsExists) {
        throw new Error('Já existe uma notícia com esse título');
      }

      let newId;
      do {
        newId = Math.floor(Math.random() * 1000) + 1;
      } while (this.news.some(singleNews=> singleNews.id == newId));

      const newsDate = new Date().toISOString().split('T')[0];

      const newNews = {
        id: newId,
        title: title,
        date: newsDate,
        description: description,
        content: content, 
        mainImage: images[0],
        secondaryImages: [images[1],images[2]]
      };

      this.news.push(newNews);
    },
    removeNews(newsId) {
      const newsIndex = this.news.findIndex(newsItem => newsItem.id == newsId);
      if (newsIndex === -1) {
        throw new Error('Notícia não encontrada');
      }
      this.news.splice(newsIndex, 1);
    },
    updateNews(updatedNews) {
      const newsIndex = this.news.findIndex(newsItem => newsItem.id == updatedNews.id);
      if (newsIndex === -1) {
        throw new Error('Notícia não encontrada');
      }
      this.news[newsIndex] = { ...this.news[newsIndex], ...updatedNews };
    },
  },
  persist: true,
});
