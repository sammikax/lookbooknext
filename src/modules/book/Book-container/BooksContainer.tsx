'use client';

import React, { useEffect, useState } from 'react';
import BookModal from '../Book-modal/Bookmodal'; 
import { useLocale } from 'next-intl';
import { shelfIdByLanguage } from "@/core/utils/fetchData";

interface Book {
    id: string;
    volumeInfo: {
        title: string;
        authors?: string[];
        description: string;
        imageLinks?: {
            thumbnail?: string;
            smallThumbnail?: string;
        };
    };
}

const BooksContainer: React.FC = () => {
    const locale = useLocale(); 
    console.log(locale);  // Esto debería imprimir algo como "en", "es", "fr", etc.
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const apiKey = 'AIzaSyDQ1LOrwZUslNaE8zBvEHLer_pUueaJY90';
        const getBooks = async () => {
            try {
                setLoading(true);
                const shelfId = shelfIdByLanguage[locale.language] || '1001';

                const response = await fetch(
                    `https://www.googleapis.com/books/v1/users/103639002406122584582/bookshelves/${shelfId}/volumes?key=${apiKey}`
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                setBooks(result.items || []);
            } catch (error) {
                setError('Hubo un error al cargar los libros.');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getBooks();
    }, [locale.language]);

    if (loading) return (
        <div className="spinner-border text-dark m5" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1 className="book-list-title">books list</h1>
            <div className='books-container'>
                {books.map((book, i) => (
                    <div key={i} className="card p-1" style={{ width: "11.2rem" }}>
                        <img
                            src={book.volumeInfo.imageLinks?.thumbnail}
                            className="card-img-center books-cover"
                            alt={`Portada de ${book.volumeInfo.title}`}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{book.volumeInfo.title}</h5>
                            <button
                                type="button"
                                className="btn btn-dark"
                                data-bs-toggle="modal"
                                data-bs-target={`#Modal${i}`} 
                            >
                                Info
                            </button>
                            <BookModal book={book} id={i} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BooksContainer;
