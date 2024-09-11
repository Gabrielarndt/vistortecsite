// src/pages/RequestInspection.js

import React, { useState } from 'react';
import styled from 'styled-components';
import '../requestStyle.css';


const RequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

const RequestForm = styled.form`
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 600px;
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Checkbox = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  input {
    margin-right: 10px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:nth-child(2) {
    background-color: #dc3545;

    &:hover {
      background-color: #c82333;
    }
  }
`;

const RequestInspection = () => {
    const [formData, setFormData] = useState({
        tipoVistoria: '',
        tipoImovel: '',
        mobiliario: '',
        inventario: false,
        estadoImovel: {
            imovelNovo: false,
            entregueLimpo: false,
            energiaEletricaLigada: false,
            pinturaNova: false,
            possuiMoveisSobMedida: false,
        },
        endereco: '',
        receberVistoria: '',
        localizador: '',
        nomesLocatarios: [],
        dadosVistoria: '',
        observacoes: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            if (name.startsWith('estadoImovel')) {
                setFormData({
                    ...formData,
                    estadoImovel: {
                        ...formData.estadoImovel,
                        [name.split('.')[1]]: checked,
                    },
                });
            } else {
                setFormData({
                    ...formData,
                    [name]: checked,
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleAddLocatario = () => {
        setFormData({
            ...formData,
            nomesLocatarios: [...formData.nomesLocatarios, ''],
        });
    };

    const handleLocatarioChange = (index, value) => {
        const novosLocatarios = [...formData.nomesLocatarios];
        novosLocatarios[index] = value;
        setFormData({ ...formData, nomesLocatarios: novosLocatarios });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar o pedido de vistoria
        console.log(formData);
    };

    return (
        <RequestContainer>
            <RequestForm onSubmit={handleSubmit}>
                <h2>Pedido de Vistoria</h2>

                <FormGroup>
                    <Label>Tipo de Vistoria</Label>
                    <Select
                        name="tipoVistoria"
                        value={formData.tipoVistoria}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecione</option>
                        <option value="entrada">Entrada</option>
                        <option value="saida">Saída</option>
                        <option value="conferencia">Conferência</option>
                        <option value="venda">Venda</option>
                    </Select>
                </FormGroup>

                <FormGroup>
                    <Label>Tipo de Imóvel</Label>
                    <Select
                        name="tipoImovel"
                        value={formData.tipoImovel}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecione</option>
                        <option value="casa_1_suite">Casa 1 Suíte</option>
                        <option value="casa_2_suites">Casa 2 Suítes</option>
                        <option value="kit_net">Kit Net</option>
                        <option value="apartamento">Apartamento</option>
                    </Select>
                </FormGroup>

                <FormGroup>
                    <Label>Mobiliário</Label>
                    <Select
                        name="mobiliario"
                        value={formData.mobiliario}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecione</option>
                        <option value="sem_moveis">Sem Móveis</option>
                        <option value="semi_mobiliado">Semi Mobiliado</option>
                        <option value="mobiliado">Mobiliado</option>
                    </Select>
                </FormGroup>

                <FormGroup>
                    <Label>Inventário</Label>
                    <Checkbox>
                        <input
                            type="checkbox"
                            name="inventario"
                            checked={formData.inventario}
                            onChange={handleChange}
                        />
                        Contém Inventário
                    </Checkbox>
                </FormGroup>

                <FormGroup>
                    <Label>Estado do Imóvel</Label>
                    <CheckboxGroup>
                        <Checkbox>
                            <input
                                type="checkbox"
                                name="estadoImovel.imovelNovo"
                                checked={formData.estadoImovel.imovelNovo}
                                onChange={handleChange}
                            />
                            Imóvel Novo?
                        </Checkbox>
                        <Checkbox>
                            <input
                                type="checkbox"
                                name="estadoImovel.entregueLimpo"
                                checked={formData.estadoImovel.entregueLimpo}
                                onChange={handleChange}
                            />
                            Entregue Limpo?
                        </Checkbox>
                        <Checkbox>
                            <input
                                type="checkbox"
                                name="estadoImovel.energiaEletricaLigada"
                                checked={formData.estadoImovel.energiaEletricaLigada}
                                onChange={handleChange}
                            />
                            Energia Elétrica Ligada?
                        </Checkbox>
                        <Checkbox>
                            <input
                                type="checkbox"
                                name="estadoImovel.pinturaNova"
                                checked={formData.estadoImovel.pinturaNova}
                                onChange={handleChange}
                            />
                            Pintura Nova?
                        </Checkbox>
                        <Checkbox>
                            <input
                                type="checkbox"
                                name="estadoImovel.possuiMoveisSobMedida"
                                checked={formData.estadoImovel.possuiMoveisSobMedida}
                                onChange={handleChange}
                            />
                            Possui Móveis Sob Medida?
                        </Checkbox>
                    </CheckboxGroup>
                </FormGroup>

                <FormGroup>
                    <h3>Endereço</h3>
                    
                    <label>Rua</label>
                    <input
                        type="text"
                        name="rua"
                        value={formData.rua}
                        onChange={handleChange}
                        required
                    />
                    <label>Bairro</label>
                    <input
                        type="text"
                        name="bairro"
                        value={formData.bairro}
                        onChange={handleChange}
                        required
                    />
                    <label>Cidade</label>
                    <input
                        type="text"
                        name="cidade"
                        value={formData.cidade}
                        onChange={handleChange}
                        required
                    />
                     <label>Estado</label>
                    <input
                        type="text"
                        name="estado"
                        value={formData.estado}
                        onChange={handleChange}
                        required
                    />
                    <label>CEP</label>
                    <input
                        type="text"
                        name="cep"
                        value={formData.cep}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Como deseja receber a vistoria?</Label>
                    <Select
                        name="receberVistoria"
                        value={formData.receberVistoria}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecione</option>
                        <option value="digital">Digital</option>
                        <option value="assinatura_eletronica">Assinatura Eletrônica</option>
                        <option value="impressao">Impressão</option>
                    </Select>
                </FormGroup>

                <FormGroup>
                    <Label>Localizador</Label>
                    <input
                        type="text"
                        name="localizador"
                        value={formData.localizador}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Nomes do Locatário</Label>
                    {formData.nomesLocatarios.map((nome, index) => (
                        <input
                            key={index}
                            type="text"
                            value={nome}
                            onChange={(e) => handleLocatarioChange(index, e.target.value)}
                            required
                        />
                    ))}
                    <Button type="button" onClick={handleAddLocatario}>
                        Adicionar Locatário
                    </Button>
                </FormGroup>

                <FormGroup>
                    <Label>Dados da Vistoria</Label>
                    <TextArea
                        name="dadosVistoria"
                        value={formData.dadosVistoria}
                        onChange={handleChange}
                        rows="4"
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Observações</Label>
                    <TextArea
                        name="observacoes"
                        value={formData.observacoes}
                        onChange={handleChange}
                        rows="4"
                    />
                </FormGroup>

                <ButtonGroup>
                    <Button type="submit">Enviar Pedido</Button>
                    <Button type="button" onClick={() => console.log('Cancelado')}>
                        Cancelar
                    </Button>
                </ButtonGroup>
            </RequestForm>
        </RequestContainer>
    );
};

export default RequestInspection;

