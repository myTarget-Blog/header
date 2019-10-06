import React from 'react';
import cl from 'classnames';
import styles from './styles.module.css';

const list = [
  {
    title: 'Новости',
    link: '/pro/news',
    items: [
      {
        title: 'Обновления',
        link: '/pro/news/updates',
      },
      {
        title: 'Статьи',
        link: '/pro/news/articles',
      },
      {
        title: 'Кейсы',
        link: '/pro/news/case-studies',
      },
    ],
  },
  {
    title: 'Обучение',
    link: '/pro/education',
    items: [
      {
        title: 'Технологии',
        link: '/pro/technologies',
      },
      {
        title: 'Форматы',
        link: '/pro/formats',
      },
      {
        title: 'Онлайн-курс',
        link: '/pro/education/online-course',
      },
      {
        title: 'Аттестация',
        link: '/pro/certification',
      },
    ],
  },
  {
    title: 'Партнёрство',
    link: '/pro/partners-list',
  },
  {
    title: 'Мероприятия',
    link: '/pro/events',
  },
];

export default class List extends React.Component {
  renderInternItems(items) {
    if (!items) return;

    return (
      <div className={styles.interns}>
        {items.map((value, index) => {
          return (
            <a href={value.link} key={index} className={styles.internItem}>
              {value.title}
            </a>
          );
        })}
      </div>
    );
  }

  renderItems() {
    return list.map((value, index) => {
      return (
        <li className={cl(styles.item, { [styles.hasInterns]: !!value.items })}>
          <a href={value.link} key={index} className={styles.link}>
            {value.title}
          </a>

          {this.renderInternItems(value.items)}
        </li>
      );
    });
  }

  render() {
    return <ul className={styles.list}>{this.renderItems()}</ul>;
  }
}
