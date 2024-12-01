import Link from 'next/link';
import styles from'../../ui/componentes/paginacion.module.css';

export function Pagination({ page, pageSize, pageCount, total }) {
    const isFirstPage = page === 1;
    const isLastPage = page === pageCount;

    const prevPage = page - 1;
    const nextPage = page + 1;

    const prevPageUrl = isFirstPage ? "#" : `?page=${prevPage}`;
    const nextPageUrl = isLastPage ? "#" : `?page=${nextPage}`;

    return (
        <div className={styles.paginationContainer}>
            <Link 
                href={prevPageUrl}
                className={`${styles.paginationButton} ${isFirstPage ? styles.disabled : ''}`}
                aria-disabled={isFirstPage}
            >
                {"<<"}
            </Link>
            <span className={styles.paginationText}>{page}</span>
            <span className={styles.paginationText}>-</span>
            <span className={styles.paginationText}>{pageCount}</span>
            <Link 
                href={nextPageUrl}
                className={`${styles.paginationButton} ${isLastPage ? styles.disabled : ''}`}
                aria-disabled={isLastPage}
            >
                {">>"}
            </Link>
        </div>
    );
}