import React from 'react';
import {listTagsByLetters} from '@docusaurus/theme-common';
import Tag from '@theme/Tag';
import styles from './styles.module.css';
function TagLetterEntryItem({letterEntry}) {
  return (
    <article>
      <ul className="padding--none">
        {letterEntry.tags.map((tag) => (
          <li key={tag.permalink} className={styles.tag}>
            <Tag {...tag} />
          </li>
        ))}
      </ul>
      <hr />
    </article>
  );
}
export default function TagsListByLetter({tags}) {
  const letterList = listTagsByLetters(tags);
  return (
    <section className="margin-vert--sm">
      {letterList.map((letterEntry) => (
        <TagLetterEntryItem
          key={letterEntry.letter}
          letterEntry={letterEntry}
        />
      ))}
    </section>
  );
}
