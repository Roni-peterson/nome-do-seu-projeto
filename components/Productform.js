// components/ProductForm.js
import React, { useState } from 'react';

const ProductForm = () => {
    const [cod_prod, setCodProd] = useState('');
    const [desc_prod, setDescProd] = useState('');
    const [ean_prod, setEanProd] = useState('');
    const [linha_prod, setLinhaProd] = useState('');
    const [dtCadastro_prod, setDtCadastroProd] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar os dados para o servidor ou fazer qualquer outra operação necessária
        console.log('Dados do formulário:', { cod_prod, desc_prod, ean_prod, linha_prod, dtCadastro_prod });
    };

    return (
        <div className="container">
            <h2 className="mt-3">Cadastro de Produtos</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="cod_prod">Código do Produto:</label>
                    <input type="text" className="form-control" id="cod_prod" value={cod_prod} onChange={(e) => setCodProd(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="desc_prod">Descrição do Produto:</label>
                    <input type="text" className="form-control" id="desc_prod" value={desc_prod} onChange={(e) => setDescProd(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="ean_prod">EAN do Produto:</label>
                    <input type="text" className="form-control" id="ean_prod" value={ean_prod} onChange={(e) => setEanProd(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="linha_prod">Linha do Produto:</label>
                    <input type="text" className="form-control" id="linha_prod" value={linha_prod} onChange={(e) => setLinhaProd(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Data de Cadastro:</label>
                    <input type="text" className="form-control" id="dtCadastro_prod" value={dtCadastro_prod} onChange={(e) => setDtCadastroProd(e.target.value)} readOnly />
                    {/* A data de cadastro deve ser preenchida automaticamente */}
                </div>
                <button type="submit" className="btn btn-primary">Cadastrar Produto</button>
            </form>
        </div>
    );
};

export default ProductForm;
