import React, { useState } from 'react';
import '../requestStyle.css'; // Atualize o caminho se necessário

const RequestInspection = () => {
    const [formData, setFormData] = useState({
        tipo_vistoria: '',
        tipo_imovel: '',
        mobiliario: '',
        inventario: false,
        imovel_novo: false,
        entregue_limpo: false,
        energia_eletrica_ligada: false,
        pintura_nova: false,
        possui_moveis_sob_medida: false,
        rua: '',
        bairro: '',
        cidade: '',
        estado: '',
        cep: '',
        receber_vistoria: '',
        dados_vistoria: '',
        observacoes: '',
        email_cliente: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:5000/api/inspection-request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Pedido de vistoria enviado com sucesso!');
                // Opcional: Limpar o formulário após o envio bem-sucedido
                setFormData({
                    tipo_vistoria: '',
                    tipo_imovel: '',
                    mobiliario: '',
                    inventario: false,
                    imovel_novo: false,
                    entregue_limpo: false,
                    energia_eletrica_ligada: false,
                    pintura_nova: false,
                    possui_moveis_sob_medida: false,
                    rua: '',
                    bairro: '',
                    cidade: '',
                    estado: '',
                    cep: '',
                    receber_vistoria: '',
                    dados_vistoria: '',
                    observacoes: '',
                    email_cliente: '',
                });
            } else {
                const errorData = await response.json();
                alert('Erro ao enviar pedido de vistoria: ' + errorData.error);
            }
        } catch (error) {
            console.error('Erro ao enviar pedido de vistoria:', error);
            alert('Erro ao enviar pedido de vistoria.');
        }
    };

    return (
        <div className="request-container">
            <form className="request-form" onSubmit={handleSubmit}>
                <h2>Pedido de Vistoria</h2>

                <div className="form-group">
                    <label className="label"><h3>Tipo de Vistoria</h3></label>
                    <select
                        className="select"
                        name="tipo_vistoria"
                        value={formData.tipo_vistoria}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecione</option>
                        <option value="entrada">Entrada</option>
                        <option value="saida">Saída</option>
                        <option value="conferencia">Conferência</option>
                        <option value="venda">Venda</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="label"><h3>Tipo de Imóvel</h3></label>
                    <select
                        className="select"
                        name="tipo_imovel"
                        value={formData.tipo_imovel}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecione</option>
                        <option value="casa_1_suite">Casa 1 Suíte</option>
                        <option value="casa_2_suites">Casa 2 Suítes</option>
                        <option value="kit_net">Kit Net</option>
                        <option value="apartamento">Apartamento</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="label"><h3>Mobiliário</h3></label>
                    <select
                        className="select"
                        name="mobiliario"
                        value={formData.mobiliario}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecione</option>
                        <option value="sem_moveis">Sem Móveis</option>
                        <option value="semi_mobiliado">Semi Mobiliado</option>
                        <option value="mobiliado">Mobiliado</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="label"><h3>Inventário</h3></label>
                    <div className="checkbox">
                        <input
                            type="checkbox"
                            name="inventario"
                            checked={formData.inventario}
                            onChange={handleChange}
                        />
                        Contém Inventário
                    </div>
                </div>

                <div className="form-group">
                    <label className="label"><h3>Estado do Imóvel</h3></label>
                    <div className="checkbox-group">
                        <div className="checkbox">
                            <input
                                type="checkbox"
                                name="imovel_novo"
                                checked={formData.imovel_novo}
                                onChange={handleChange}
                            />
                            Imóvel Novo?
                        </div>
                        <div className="checkbox">
                            <input
                                type="checkbox"
                                name="entregue_limpo"
                                checked={formData.entregue_limpo}
                                onChange={handleChange}
                            />
                            Entregue Limpo?
                        </div>
                        <div className="checkbox">
                            <input
                                type="checkbox"
                                name="energia_eletrica_ligada"
                                checked={formData.energia_eletrica_ligada}
                                onChange={handleChange}
                            />
                            Energia Elétrica Ligada?
                        </div>
                        <div className="checkbox">
                            <input
                                type="checkbox"
                                name="pintura_nova"
                                checked={formData.pintura_nova}
                                onChange={handleChange}
                            />
                            Pintura Nova?
                        </div>
                        <div className="checkbox">
                            <input
                                type="checkbox"
                                name="possui_moveis_sob_medida"
                                checked={formData.possui_moveis_sob_medida}
                                onChange={handleChange}
                            />
                            Possui Móveis Sob Medida?
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <h3>Endereço</h3>
                    <label className="label">Rua</label>
                    <input
                        type="text"
                        name="rua"
                        value={formData.rua}
                        onChange={handleChange}
                        required
                    />
                    <label className="label">Bairro</label>
                    <input
                        type="text"
                        name="bairro"
                        value={formData.bairro}
                        onChange={handleChange}
                        required
                    />
                    <label className="label">Cidade</label>
                    <input
                        type="text"
                        name="cidade"
                        value={formData.cidade}
                        onChange={handleChange}
                        required
                    />
                    <label className="label">Estado</label>
                    <input
                        type="text"
                        name="estado"
                        value={formData.estado}
                        onChange={handleChange}
                        required
                    />
                    <label className="label">CEP</label>
                    <input
                        type="text"
                        name="cep"
                        value={formData.cep}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="label"><h3>Como você gostaria de receber a vistoria?</h3></label>
                    <select
                        className="select"
                        name="receber_vistoria"
                        value={formData.receber_vistoria}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecione</option>
                        <option value="email">Email</option>
                        <option value="telefone">Telefone</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="label"><h3>Dados da Vistoria</h3></label>
                    <textarea
                        className="text-area"
                        name="dados_vistoria"
                        value={formData.dados_vistoria}
                        onChange={handleChange}
                        rows="4"
                    />
                </div>

                <div className="form-group">
                    <label className="label"><h3>Observações</h3></label>
                    <textarea
                        className="text-area"
                        name="observacoes"
                        value={formData.observacoes}
                        onChange={handleChange}
                        rows="4"
                    />
                </div>

                <div className="form-group">
                    <label className="label"><h3>Email do Cliente</h3></label>
                    <input
                        type="email"
                        className="text-area"
                        name="email_cliente"
                        value={formData.email_cliente}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="button-group">
                    <button className="button" type="submit">Enviar Pedido</button>
                    <button className="button" type="button" onClick={() => console.log('Cancelado')}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default RequestInspection;
