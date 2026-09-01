export type Program={slug:string;title:string;description:string;audience:string;image:string;verified:boolean};
export const images={
 hero:"https://images.unsplash.com/photo-1601312378427-822b2b41da35?auto=format&fit=crop&w=1600&q=85",
 piano:"https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&w=1000&q=85",
 keyboard:"https://images.unsplash.com/photo-1595069906974-f8ae7ffc3e7a?auto=format&fit=crop&w=1000&q=85",
 guitar:"https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=1000&q=85",
 drums:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1000&q=85",
 violin:"https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?auto=format&fit=crop&w=1000&q=85",
 vocal:"https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&q=85",
 children:"https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=1200&q=85",
 adult:"https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=85",
 teacher:"https://images.unsplash.com/photo-1524650359799-842906ca1c06?auto=format&fit=crop&w=1200&q=85",
 recital:"https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?auto=format&fit=crop&w=1200&q=85",
 performance:"https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=1200&q=85",
 school:"https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&w=1200&q=85",
};
export const programs:Program[]=[
 ["piano","Piano","Build a strong foundation in reading, technique, and expressive playing.","Children, teens & adults",images.piano],
 ["keyboard","Keyboard","Discover melody, harmony, and rhythm through hands-on music making.","Children & teens",images.keyboard],
 ["guitar","Guitar","Learn chords, songs, and technique while developing your own sound.","Teens & adults",images.guitar],
 ["drums","Drums","Turn energy into rhythm through timing, coordination, and groove.","Children, teens & adults",images.drums],
 ["violin","Violin","Shape beautiful tone and confident musicianship, one phrase at a time.","Children & teens",images.violin],
 ["vocal","Vocal","Find your voice through healthy technique and expressive performance.","Teens & adults",images.vocal],
 ["junior-music","Junior Music","Sing, listen, move, and play in a joyful first music experience.","Young learners",images.children],
 ["early-childhood","Early Childhood Music","Share the wonder of sound, rhythm, and musical play together.","Early years",images.school],
].map(([slug,title,description,audience,image])=>({slug,title,description,audience,image,verified:false})) as Program[];
export const locations=["Rawamangun","Tamini Square","Harapan Indah","Cirebon"].map(name=>({name,city:name==="Cirebon"?"Cirebon":"Greater Jakarta",address:null,phone:null,verified:false}));
export const events=[{title:"Student Recital",date:null,location:null,category:"Performance",image:images.recital,verified:false},{title:"Music Workshop",date:null,location:null,category:"Workshop",image:images.teacher,verified:false}];
export const testimonials=[
 ["The lesson structure feels encouraging and gives young learners something meaningful to work toward.","Parent of Piano Student"],
 ["A welcoming way to return to music, with room to learn at a comfortable pace.","Adult Guitar Student"],
 ["Music time has become something our family looks forward to each week.","Parent of Junior Music Student"],
].map(([quote,by])=>({quote,by,verified:false}));
export const faqs=[
 ["What age can students start music lessons?","Starting ages vary by program. Our team can suggest an age-appropriate place to begin."],
 ["Can beginners join?","Absolutely. Beginners of different ages can start with a program suited to their interests and learning stage."],
 ["How do I choose the right music program?","Consider the learner’s age, musical interests, and goals. A trial class is a lovely way to discover the right fit."],
 ["Can I book a trial class?","Yes. Complete the trial request form and choose your preferred program, branch, and schedule."],
 ["Where are Max & Jeanny locations?","You can find Max & Jeanny in Rawamangun, Tamini Square, Harapan Indah, and Cirebon."],
 ["Are classes available for adults?","Yes, adults can explore music at their own pace, whether beginning for the first time or returning to an instrument."],
];
