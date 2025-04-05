import styles from '../styles/Home.module.css';
import HomeSection2 from '@/components/HomeSection2';

export default function Home() {
  return (
    <>
      <div className={styles.fullScreenWrapper}>
        <img src="/decoded_image.svg" alt="Background Graphic" className={styles.fullScreenImage} />
        <div className={styles.textOverlay}>
          <h1>We’ve Got to Talk</h1>
          <p>Your weekly podcast on untold student stories, behind the scenes, and unfiltered convos.</p>
        </div>
      </div>

      {/* Second Section */}
      <HomeSection2 />
    </>
  );
}
