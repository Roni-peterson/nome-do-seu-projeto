// components/StockEntry.js
import React, { useState } from 'react';

const StockEntry = () => {
    const [quant_prod, setQuantProd] = useState('');
    const [dt_val_prod, setDtValProd] = useState('');
    const [lote_prod, setLoteProd] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar os dados para o servidor ou fazer qualquer outra operação necessária
        console.log('Dados do formulário:', { quant_prod, dt_val_prod, lote_prod });
    };

    const handleSearchProduct = () => {
        // Lógica para buscar o produto pelo código ou EAN
        // Se o produto não for encontrado, redirecionar para o formulário de cadastro
        console.log('Buscar produto:', 'Prioridade: Buscar o produto...');
    };

    return (
        <div className="container">
            <h2 className="mt-3">Inserção de Estoque</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="codigoProduto">Código ou EAN do Produto:</label>
                    <input type="text" className="form-control" id="codigoProduto" onBlur={handleSearchProduct} />
                </div>
                <div className="form-group">
                    <label htmlFor="quant_prod">Quantidade em Estoque:</label>
                    <input type="number" className="form-control" id="quant_prod" value={quant_prod} onChange={(e) => setQuantProd(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="dt_val_prod">Data de Validade:</label>
                    <input type="date" className="form-control" id="dt_val_prod" value={dt_val_prod} onChange={(e) => setDtValProd(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="lote_prod">Lote do Produto:</label>
                    <input type="text" className="form-control" id="lote_prod" value={lote_prod} onChange={(e) => setLoteProd(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Inserir Estoque</button>
            </form>
        </div>
    );
};

export default StockEntry;
