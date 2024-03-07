// components/StockReduction.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importe a biblioteca Axios para fazer requisições HTTP

const StockReduction = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        // Função para buscar os produtos no banco de dados
        const fetchProducts = async () => {
            try {
                const response = await axios.post('/api/searchProduct', { searchTerm }); // Envie o termo de pesquisa para a rota /api/searchProduct
                setFilteredProducts(response.data); // Atualize os produtos filtrados com os dados recebidos do servidor
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        };

        fetchProducts(); // Chame a função de busca ao montar o componente
    }, [searchTerm]); // Execute a busca sempre que o termo de pesquisa mudar

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="container">
            <h2 className="mt-3">Baixa de Estoque</h2>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Digite o código ou EAN do produto..." onChange={handleSearch} />
            </div>
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
                    {filteredProducts.map(product => (
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
    );
};

export default StockReduction;
