'use client';
import * as S from './index.styled';
import { useEffect, useState } from 'react';

type DataType = {
    test: string;
};

export default function HomeComponent() {
    const [data, setData] = useState<DataType | null>(null);

    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:5000/test');
            const json: DataType = await response.json();
            setData(json);
        })();
    }, []);

    return (
        <S.Wrapper>
            Главная
            <p>
                <strong>Test:</strong> <span>{data?.test}</span>
            </p>
        </S.Wrapper>
    );
}
