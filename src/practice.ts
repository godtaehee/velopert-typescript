interface Person {
  name: string,
  age?: number; // 물음표는 있어도되고 없어도되고
}

interface Developer {
  name: string;
  age?: number;
  skills: string[];
}

const person: Person = {
  name: '김태희',
  age: 20
};

const expert: Developer = {
  name: '김개발',
  skills: ['javascript', 'react']
}


