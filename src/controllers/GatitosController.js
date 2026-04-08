const Gatitos = require('../models/gatitos');

class GatitosController {
    static async create(req, res) {
        try {
            const { nameGato, racaGato, pessoaTemGato } = req.body;
            if (!nameGato || !racaGato || !pessoaTemGato) {
                return res.status(400).json({ message: "Dados inválidos." });
            }
            
            const gatitosData = {
            name,
            idadePessoa

            };
            const newGatitos = await Gatitos.create(gatitosData);
            return res.status(201).json({ message: 'Pessoa criada com sucesso', data: newGatitos });

        } catch (error) {
            return res.status(500).json({ message: 'Erro ao criar pessoa', error: error.message });
        }
    }

    static async getAll(req, res) {
        try {
           const people = await Gatitos.find();
            return res.status(200).json({ data: people });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao encontrar Gatos', error: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;
            const pessoas = await Gatitos.findById(id);
            if (!gatitos) {
                return res.status(404).json({ message: 'gato não encontrada' });
            }
            return res.status(200).json({ data: gatitos });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao encontrar gato', error: error.message });
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const { nameGato, racaGato, pessoaTemGato } = req.body;
            const updatedData = {
                nameGato,
                racaGato,
                pessoaTemGato
            };
            const updatedGatito = await Gatitos.findByIdAndUpdate(id, updatedData, { new: true });
            if (!updatedGatito) {
                return res.status(404).json({ message: 'Gato não encontrada' });
            }
            return res.status(200).json({ message: 'gato atualizada com sucesso', data: updatedGatito });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao atualizar gato', error: error.message });
        }
    }

 static async delete(req, res) {
  try {
    const gatitos = await Gatitos.findById(req.params.id);

    if (!gatitos) {
      return res.status(404).json({ error: "Item não encontrado" });
    }

    gatitos.isActive = false;
    await gatitos.save();

    return res.status(200).json({ message: "Item desativado" });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao deletar gato" });
  }
}
}	


module.exports = GatitosController;