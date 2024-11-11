import Link from 'next/link';

export function Pagination({
    page, pageSize, pageCount, total
}){
    const firtPage = page === 1;
    const lastPage = page === pageCount;

    const prevPage = page - 1;
    const nextPage = page + 1;

    const prevPageUrl = firtPage ? "#" : `?page=${prevPage}`;
    const nextPageUrl = lastPage ? "#" : `?page=${nextPage}`;

    return(
        <div>
            <Link href={prevPageUrl}
                className="btn btn-primary"
                disabled={firtPage}
            >{"<<"}</Link>
            <span>{page}</span>
            <span>.....</span>
            <span>{pageCount}</span>
            <Link href={nextPageUrl}
                    className='btn btn-primary'
                    disabled={lastPage}>
                {">>"}
            </Link>
        </div>
    )
}