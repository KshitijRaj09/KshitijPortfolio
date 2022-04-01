import { mainSkills, familiarWithSkills } from './skills.js';

const css = document.getElementById('second-css');
const theme = document.querySelector('.theme-1');

theme.addEventListener('click', () => {
  if (!css.href.includes('css/darkmode.css')) {
    css.href = 'css/darkmode.css';
  } else {
    css.href = '';
  }
});

const date = new Date();
const year = document.getElementById('year');
year.innerHTML = date.getFullYear() + ' ';

const renderSkillsinList = (skills) =>
  skills.map((skill) => '<li>' + skill + '</li>').join('');

const renderSkillsOnPage = () => {
  const fetchMainSkills = document.querySelector('.main-skills');
  const fetchFamiliarWithSkills = document.querySelector(
    '.familiarwith-skills'
  );
  fetchMainSkills.innerHTML = renderSkillsinList(mainSkills);
  fetchFamiliarWithSkills.innerHTML = renderSkillsinList(familiarWithSkills);
};

renderSkillsOnPage();
