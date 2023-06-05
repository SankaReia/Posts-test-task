import React, { FC } from "react";
import { Card, Stack, Image } from "react-bootstrap";
import logo from "../img/logo.jpg";
import vk from "../img/vk.png";
import telegram from "../img/telegram.jpg";
import github from "../img/github.png";

const AboutMe: FC = () => {
  return (
    <Card
      style={{ maxWidth: "800px", width: "100%" }}
      className="p-2 mx-auto position-relative"
    >
      <Image src={logo} width="200" className="mx-auto" />
      <Stack style={{ marginLeft: 10 }}>
        <Card.Title>Обо мне</Card.Title>
        <Card.Body>
          <Card.Text>
            Меня зовут Нияз, мне 21. Проживаю в городе Казань. Заканчиваю 4 курс
            КНИТУ-КХТИ. Планирую поступать в магистратуру по направлению it.
            Изучаю front end в течение года. Имею опыт в создании как клиентской
            так и серверной стороны приложения
          </Card.Text>
          <Card.Text>
            Мой основной стек состоит из: HTML, CSS (Sass/Scss), JavaScript
            (ES6+), React (Hooks, Router DOM, Redux),TypeScript, Express.js,
            PostgreSQL, Git, Axios.
          </Card.Text>
        </Card.Body>
        <Stack direction="horizontal" gap={4} className="d-flex flex-wrap">
          <a href="https://vk.com/niyaz_i_am" target="_blank">
            <Image src={vk} width="30" roundedCircle />
          </a>
          <a href="https://t.me/niyaz_iam" target="_blank">
            <Image src={telegram} width="30" roundedCircle />
          </a>
          <a href="https://github.com/SankaReia" target="_blank">
            <Image src={github} width="30" roundedCircle />
          </a>
          <span style={{ fontStyle: "italic" }}>mr.sherman007@gmail.com</span>
        </Stack>
      </Stack>
    </Card>
  );
};

export default AboutMe;
