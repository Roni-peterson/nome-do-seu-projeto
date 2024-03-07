// pages/index.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Importe o componente Link do Next.js para criar links
import StockReduction from '../components/StockReduction'; // Importe o componente StockReduction.js

const Home = () => {
    // Estado para armazenar os produtos
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Aqui você faria a requisição para obter os produtos do banco de dados
        // Por enquanto, estou simulando alguns produtos
        const dummyProducts = [
            { ean: '1234567890123', codigo: '001', descricao: 'Produto 1', linha: 'Linha 1', rua: 'A', prateleira: '1', caixa: 'A1', estoque: 10 },
            { ean: '1234567890456', codigo: '002', descricao: 'Produto 2', linha: 'Linha 2', rua: 'B', prateleira: '2', caixa: 'B2', estoque: 20 },
            { ean: '1234567890789', codigo: '003', descricao: 'Produto 3', linha: 'Linha 3', rua: 'C', prateleira: '3', caixa: 'C3', estoque: 30 },
            // Adicione mais produtos conforme necessário
        ];
        setProducts(dummyProducts);
    }, []);

    return (
        <div>
            <header>
                <h1>Gerenciamento de Estoque</h1>
                <nav>
                    <ul>
                        <li>
                            <Link href="/products">
                                <a>Cadastrar Produtos</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/address">
                                <a>Endereçar Produto</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/stock">
                                <a>Estoque Produto</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/reduction">
                                <a>Baixas Estoque</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="container">
                <h2>Produtos Cadastrados</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>EAN</th>
                            <th>Código</th>
                            <th>Descrição</th>
                            <th>Linha</th>
                            <th>Rua</th>
                            <th>Prateleira</th>
                            <th>Caixa</th>
                            <th>Estoque</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.ean}>
                                <td>{product.ean}</td>
                                <td>{product.codigo}</td>
                                <td>{product.descricao}</td>
                                <td>{product.linha}</td>
                                <td>{product.rua}</td>
                                <td>{product.prateleira}</td>
                                <td>{product.caixa}</td>
                                <td>{product.estoque}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <StockReduction /> {/* Componente StockReduction.js para gerenciar a baixa de estoque */}
        </div>
    );
};

export default Home;
