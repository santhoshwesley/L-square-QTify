import styles from "../Section/Section.module.css";
import Card from "../Card/Card";

function Section({ title, albums, buttonName, showDivider }) {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <button className={styles.sectionCollapseButtton}> {buttonName}</button>
      </div>
      <div className={styles.albumContainer}>
        {albums.map((album) => (
          <Card key={album.id} data={album} type="album" />
        ))}
      </div>
      {showDivider && <div className={styles.divider}></div>}
    </div>
  );
}

export default Section;
