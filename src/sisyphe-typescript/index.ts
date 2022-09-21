interface Crew {
  name: string;
  language: 'Java' | 'JavaScript';
  coach: 'poco' | 'gugu';
}

interface Coach {
  name: string;
  language: 'Java' | 'JavaScript';
}

const crew: Crew = {
  name: 'sisyphe',
  language: 'JavaScript',
  coach: 'gugu',
};

const coach: Coach = {
  name: 'poco',
  language: 'JavaScript',
};

const doCoding = (person: Coach) => `${person.name}이 ${person.language}를 다룹니다.}`;

// 충격! 타입 호환이 되다!
console.log(doCoding(crew));
console.log(doCoding(coach));
