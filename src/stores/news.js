import { defineStore } from 'pinia';

export const useNewsStore = defineStore('news', {
  state: () => ({
    news: [
      {
        id: "1",
        title: "The Countdown Begins: Berlin Awaits Hypnotica Festival 2025",
        date: "2024-12-20",
        description: "Berlin prepares for Hypnotica Festival 2025 with over 100 performances and immersive experiences.",
        content: `Berlin, the epicenter of electronic music and cultural innovation, is gearing up for one of the most anticipated events of the year: the Hypnotica Festival 2025. Spanning three electrifying days and nights from January 3 to January 5, 2025, this groundbreaking festival promises to transform the city into a pulsating hub of cutting-edge sound, visual artistry, and unforgettable experiences.
      
      Set against the backdrop of Berlin’s iconic landmarks and sprawling industrial spaces, Hypnotica Festival will feature over 100 performances from world-renowned DJs, live acts, and emerging talent. The festival is a celebration of electronic music in all its forms—ranging from hypnotic techno and ambient soundscapes to high-energy house and experimental beats. Each stage will offer a unique thematic experience, enhanced by immersive light shows, 3D visual mapping, and interactive installations designed by some of the world’s leading digital artists.
      
      But Hypnotica is more than just music. Attendees can explore a variety of curated spaces dedicated to art, technology, and culture. Highlights include workshops on music production and sound design, panel discussions with industry pioneers, and an innovation zone showcasing the latest advancements in music technology. A special wellness area will also provide spaces for relaxation, featuring sound healing sessions, yoga classes, and chill-out zones.
      
      Food lovers will not be disappointed either, as the festival will host a diverse selection of gourmet food trucks and pop-up restaurants offering international cuisine, vegan options, and Berlin’s iconic street food. For those looking for exclusive experiences, VIP passes grant access to private lounges, behind-the-scenes tours, and meet-and-greets with the artists.
      
      The Hypnotica Festival is expected to attract thousands of attendees from around the world, reinforcing Berlin’s reputation as a global capital of creativity and nightlife. Whether you're a die-hard electronic music fan or simply curious about the vibrant culture of Berlin, Hypnotica Festival 2025 promises to be an unforgettable start to the new year.
      
      Tickets are selling fast, with early bird packages already sold out. Don’t miss your chance to be part of this once-in-a-lifetime event that blends music, art, and community into an unparalleled festival experience.`,
        mainImage: "https://images.ctfassets.net/w0xmjfdre13u/16TsQRnXu7ar567awIiuLO/4a073bc07e89f23d6d9a862c8cc1d179/junction2meta_copy.jpg",
        secondaryImages: [
          "https://scenenow.com/Content/Admin/Uploads/Articles/ArticlesMainPhoto/62584/f256e3a2-0bef-4612-8fed-92fcd7abb164.jpg",
          "https://edm.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_620%2Cx_1280%2Cy_864/MTk1NzY4ODUyNTEwOTQyODY4/bs22_day1-264.jpg"
        ]
      },
      {
        id: "2",
        title: "New York Fashion Week 2025: A Glimpse into the Future of Fashion",
        date: "2025-01-05",
        description: "New York Fashion Week 2025 is redefining the future of fashion with eco-friendly designs and technological innovations.",
        content: `New York Fashion Week 2025 has arrived, bringing with it a wave of innovation, sustainability, and creativity that is reshaping the fashion world. This year’s event is not just a showcase of glamorous designs and couture; it is a statement on the direction in which the industry is heading. Designers from across the globe are presenting collections that prioritize eco-friendly materials, including recycled fabrics and biodegradable textiles, reflecting a growing commitment to sustainability. 
    
    The runways have also seen an infusion of technology, from AI-generated patterns to garments that incorporate wearable tech. Models are stepping onto the stage with garments that respond to environmental conditions, such as dresses that change color based on temperature or accessories embedded with smart sensors.
    
    Moreover, the event is embracing inclusivity like never before, with diverse representation across age, size, and cultural backgrounds. New York Fashion Week is not just a glimpse into the future of fashion—it’s a celebration of how the industry can evolve to reflect the world we live in today and tomorrow.`,
        mainImage: "https://www.datocms-assets.com/66357/1693314142-palm-tree-festival.webp",
        secondaryImages: [
          "https://www.guettapen.com/wp-content/uploads/2019/04/54515083_643883306063751_7053415255946297344_n.jpg",
          "https://i0.wp.com/mnmt.no/wp-content/uploads/2016/03/10_10499542_10152668382583755_2186614163480345366_o.jpg?fit=2048%2C1153&ssl=1"
        ]
      },
      {
        id: "3",
        title: "Virtual Reality Takes Center Stage at CES 2025",
        date: "2025-01-10",
        description: "At CES 2025, virtual reality innovations are pushing the boundaries of entertainment, gaming, and education.",
        content: `The Consumer Electronics Show (CES) 2025 in Las Vegas has firmly positioned virtual reality (VR) at the forefront of technological innovation. Attendees are immersing themselves in futuristic experiences that redefine how we interact with digital spaces. Gaming companies are unveiling VR headsets with unprecedented levels of detail, allowing players to dive into hyper-realistic environments. 
    
    Education is another sector witnessing a VR revolution, as developers showcase simulations for training in medicine, engineering, and other disciplines. Surgeons are practicing complex procedures in fully immersive operating room simulations, while students are exploring ancient civilizations in 3D detail without leaving their classrooms.
    
    Additionally, entertainment is being transformed. Major film studios are experimenting with VR cinema, providing audiences with a 360-degree storytelling experience that puts them in the middle of the action. Beyond the excitement, discussions at CES are also addressing accessibility, striving to make these transformative technologies available to broader audiences, ensuring that VR becomes a tool for connection and progress rather than division.`,
        mainImage: "https://www.noa-zrce.com/data/public/eventi/264957297_451185839706994_7517350140826312015_n.jpg",
        secondaryImages: [
          "https://europebookings.com/wp-content/uploads/hideout-festival-papaya-club-stage-lights.jpg",
          "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F892992183%2F312824393915%2F1%2Foriginal.20241106-130536?auto=format%2Ccompress&q=75&sharp=10&s=e8fb02bfdc40405b52afebcafe6cfc89"
        ]
      },
      {
        id: "4",
        title: "The Rise of Eco-Tourism: A Sustainable Way to Travel",
        date: "2025-01-08",
        description: "Eco-tourism is on the rise as travelers seek environmentally conscious ways to explore the world.",
        content: `Eco-tourism is rapidly gaining traction as travelers increasingly prioritize environmentally responsible ways to explore the world. This growing trend is reshaping the tourism industry, with more destinations and travel providers offering eco-friendly alternatives. Eco-tourism encompasses a wide range of practices, from staying in green-certified accommodations to participating in guided wildlife tours that prioritize conservation.
    
    In Costa Rica, for example, eco-lodges are designed to blend seamlessly with the rainforest while promoting biodiversity. In Iceland, travelers can participate in carbon-offset programs while enjoying the northern lights. Tourists are also becoming more conscious of their carbon footprint, opting for train travel over flights where possible and supporting local communities through sustainable practices.
    
    Beyond the personal benefits, eco-tourism is a powerful force for change. It brings much-needed attention to conservation efforts and demonstrates that tourism can coexist with environmental stewardship, providing a model for a more sustainable future.`,
        mainImage: "https://cdn.prod.website-files.com/64427620b70e49196db5e0d3/64427620b70e49530ab5e32c_yvette-de-wit-584317-unsplash.jpg",
        secondaryImages: [
          "https://i0.wp.com/thegroovecartel.com/wp-content/uploads/2024/01/rsz_20230611_verknipt_jessewensing_5.jpg?fit=770%2C512&ssl=1",
          "https://psymedia.co.za/wp-content/uploads/stone-techno-1.jpg"
        ]
      },
      {
        id: "5",
        title: "Breakthrough in Quantum Computing: The Future of Technology",
        date: "2025-01-11",
        description: "Scientists have made a groundbreaking advancement in quantum computing, bringing us closer to a technological revolution.",
        content: `Quantum computing has reached a historic milestone with scientists unveiling a new method that exponentially increases processing power. Unlike classical computers, which operate using binary code, quantum computers leverage quantum bits (qubits), allowing them to solve complex problems at previously unimaginable speeds. 
    
    This breakthrough has profound implications across multiple industries. In medicine, quantum computing could accelerate drug discovery by simulating molecular interactions in real time. In cybersecurity, it promises to crack current encryption methods but also enables the creation of quantum-resistant algorithms. Industries like finance, logistics, and artificial intelligence stand to benefit as well, with quantum systems providing solutions to optimization problems that would take classical computers years to solve.
    
    As we move closer to the widespread application of quantum technology, ethical and security concerns are also being addressed to ensure this transformative power is used responsibly and equitably.`,
        mainImage: "https://love-explosion.com/_ipx/w_1500&f_webp/content/Startseite/Startseite-Techno4.jpg",
        secondaryImages: [
          "https://www.seadancefestival.me/wp-content/uploads/2023/06/52317616884_09977d0afe_o-1.jpg",
          "https://www.technostation.tv/wp-content/uploads/2023/12/351377010_6386273988121268_3776490156528089739_n.jpg"
        ]
      },
      {
        id: "6",
        title: "Exploring Space Tourism: The Final Frontier",
        date: "2025-01-15",
        description: "Space tourism is taking off with private companies offering trips to the edge of space and beyond.",
        content: `Space tourism is no longer a far-fetched dream. Companies like SpaceX, Blue Origin, and Virgin Galactic are making space travel accessible to private individuals. From brief suborbital trips that offer minutes of weightlessness to week-long stays at orbital hotels, the industry is opening the doors to a new era of adventure.
    
    While the costs remain high, industry leaders predict that advances in technology will make space travel more affordable. Scientists and engineers are also developing systems to ensure the environmental impact of space tourism is minimized, exploring reusable rockets and alternative fuels.
    
    The rise of space tourism is inspiring a generation of enthusiasts and innovators while raising questions about accessibility, regulation, and sustainability in this burgeoning industry.`,
        mainImage: "https://djmag.com/sites/default/files/styles/djm_23_961x540_jpg/public/2024-06/9.%20World%20Club%20Dome.webp.jpg?itok=_ZJ28YdG",
        secondaryImages: [
          "https://www.timeoutjeddah.com/cloud/timeoutjeddah/2024/04/21/groove-on-the-grass-4.jpg",
          "https://static.listmag.com/styles/large/public/inline-images/Groove%20on%20the%20Grass%202024%202.jpg"
        ]
      },
      {
        id: "7",
        title: "AI-Powered Health Diagnostics: Revolutionizing Medicine",
        date: "2025-01-18",
        description: "Artificial Intelligence is transforming healthcare by providing accurate and fast diagnostics.",
        content: `Artificial Intelligence (AI) is revolutionizing the field of healthcare, particularly in diagnostics. With advanced machine learning algorithms, AI systems can now analyze medical images, such as X-rays, MRIs, and CT scans, with unprecedented accuracy. This breakthrough is helping doctors detect diseases like cancer, heart conditions, and neurological disorders earlier and more effectively than ever before.
    
    AI-powered diagnostic tools are also proving to be invaluable in underserved areas, where access to specialists is limited. Portable devices equipped with AI can perform on-the-spot analyses, providing critical insights to healthcare workers in real time. In addition, AI is making strides in personalized medicine by predicting how patients will respond to treatments based on their genetic profiles.
    
    However, the integration of AI in healthcare raises important ethical considerations, such as data privacy, the role of human oversight, and ensuring equitable access to these advanced technologies. Despite these challenges, the potential for AI to save lives and improve patient outcomes is immense.`,
        mainImage: "https://basscoast.ca/cdn/shop/files/3-ConcertSocks-2023-162_Justin-Martin_720x.jpg?v=1698945304",
        secondaryImages: [
          "https://www.farandwide.com/wp-content/uploads/2024/12/6b91fc0a36864dd29cedd8fd0866a1e0.webp",
          "https://www.dailynews.com/wp-content/uploads/2023/05/LDN-L-DESSERTHEARTS-0505-04.jpg?w=507"
        ]
      },
      {
        id: "8",
        title: "Green Energy Breakthrough: Solar Panel Efficiency Hits New High",
        date: "2025-01-20",
        description: "Scientists have achieved record-breaking efficiency in solar panels, boosting renewable energy adoption.",
        content: `A new milestone in renewable energy has been reached as scientists announce record-breaking efficiency in solar panel technology. By utilizing advanced materials like perovskite and tandem-cell designs, researchers have created solar panels capable of converting over 50% of sunlight into usable energy. This innovation marks a significant leap forward from the average efficiency of 20-25% seen in conventional panels.
    
    The breakthrough has the potential to transform the energy landscape, making solar power more viable and cost-effective for homes, businesses, and large-scale applications. These high-efficiency panels are not only more powerful but also lighter and more durable, enabling easier installation in diverse environments, from urban rooftops to remote off-grid areas.
    
    Governments and private sectors worldwide are investing heavily in scaling up production, with experts predicting that solar energy will account for a significant portion of global electricity generation within the next decade. As the technology advances, it promises to play a key role in combating climate change and reducing dependence on fossil fuels.`,
        mainImage: "https://www.thissongslaps.com/wp-content/uploads/2020/01/hard-summer-2020-dates-thissongslaps-scaled.jpg",
        secondaryImages: [
          "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/38/2020/01/10114829/ticketingfaq768x440.jpg",
          "https://d2po6uops3e7id.cloudfront.net/img/news-cover/4db5592d-bd0c-4160-8470-f99dfb98d129.jpg?v=10"
        ]
      },
      {
        id: "9",
        title: "Robotics in Agriculture: The Future of Farming",
        date: "2025-01-23",
        description: "Robotic systems are transforming agriculture by automating tasks and improving efficiency.",
        content: `Agriculture is undergoing a technological revolution as robotic systems become increasingly integral to farming operations. From autonomous tractors to drones equipped with AI, these innovations are streamlining labor-intensive tasks such as planting, harvesting, and crop monitoring. Farmers can now utilize precision agriculture techniques, where sensors and robots work together to optimize the use of water, fertilizers, and pesticides.
    
    One notable development is the introduction of robotic harvesters capable of picking delicate fruits like strawberries without causing damage. Drones are also playing a crucial role, capturing high-resolution images of fields to detect diseases, pests, or nutrient deficiencies early. These insights allow farmers to intervene proactively, reducing crop loss and improving yields.
    
    Beyond efficiency, robotics is helping address labor shortages in the agricultural sector while reducing the environmental impact of farming practices. As the technology becomes more affordable and accessible, robotics promises to reshape the future of agriculture, ensuring food security for a growing global population.`,
        mainImage: "https://t3.ftcdn.net/jpg/05/95/39/36/360_F_595393668_T5R3JVKFAXiZgdpsMkH9hyGchnC6eM1s.jpg",
        secondaryImages: [
          "https://discotech.me/wp-content/uploads/2021/02/photo-1578946956088-940c3b502864.jpeg",
          "https://st2.depositphotos.com/3726985/12027/i/450/depositphotos_120272698-stock-photo-medusa-sun-beach-festival.jpg"
        ]
      },
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
    addNews(title, description, content, images) {
      const newsExists = this.news.some(newsItem => newsItem.title == title);
      if (newsExists) {
        throw new Error('Já existe uma notícia com esse título');
      }

      let newId;
      do {
        newId = Math.floor(Math.random() * 1000) + 1;
      } while (this.news.some(singleNews => singleNews.id == newId));

      const newsDate = new Date().toISOString().split('T')[0];

      const newNews = {
        id: newId,
        title: title,
        date: newsDate,
        description: description,
        content: content,
        mainImage: images[0],
        secondaryImages: [images[1], images[2]]
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
