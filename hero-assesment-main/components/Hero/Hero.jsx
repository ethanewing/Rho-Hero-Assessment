// TODO: Build your Hero component here
// Requirements:
// - Accept props: src, alt, title, description, placeTitle, placeDescription
// - Use CSS Modules for styling
// - Implement scalable styles
// - Make it semantic and accessible

import styles from './Hero.module.css';

export default function Hero({src, alt, title, description, placeTitle, placeDescription, theme = 'light'}) {
    const placementClass = `${styles.hero} ${styles[`theme-${theme}`]} ${styles[`title-${placeTitle?.
    replace(/\s+/g, '-')}`]} ${styles[`description-${placeDescription?.replace(/\s+/g, '-')}`]}
    ${styles[`placement-${placeTitle.replace(' ', '-')}`]}`;

    return (
        <article
            className={placementClass}
            aria-labelledby={title ? `hero-title-${title.replace(/\s+/g, '-')}` : 'hero-title-' + title}
        >
            <img
                src={src}
                alt={alt}
                className={styles.backgroundImage}
                loading="lazy"
            />
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                {title && (
                    <h2
                        id={title ? `hero-title-${title.replace(/\s+/g, '-')}` : undefined}
                        className={styles.title}
                    >
                        {title}
                    </h2>
                )}
                {description && (
                    <p className={styles.description}>{description}</p>
                )}
            </div>
        </article>
    );
}
