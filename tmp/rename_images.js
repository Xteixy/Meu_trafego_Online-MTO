const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const renames = {
    'Alfredo Teixeira.png': 'alfredo-teixeira.png',
    'Doctor Xteixy.png': 'doctor-xteixy.png',
    'Cláudio Marcos.png': 'claudio-marcos.png',
    'Cláudio Marcos 1.png': 'claudio-marcos-1.png',
    'importação.png': 'importacao.png',
    'importação1.png': 'importacao-1.png',
    'renda extra.png': 'renda-extra.png',
    'renda extra 1.png': 'renda-extra-1.png',
    'Toolkit do Produtor As 10 Melhores IAs de 2025.png': 'toolkit-produtor-ias-2025.png',
    'Segurança com IA Proteja Dados Sem Frear a Inovação.png': 'seguranca-ia-inovacao.png',
    'Personalização no E-commerce O Fim das Sugestões Genéricas.png': 'personalizacao-ecommerce.png'
};

Object.entries(renames).forEach(([oldName, newName]) => {
    const oldPath = path.join(publicDir, oldName);
    const newPath = path.join(publicDir, newName);

    if (fs.existsSync(oldPath)) {
        console.log(`Renaming: ${oldName} -> ${newName}`);
        fs.renameSync(oldPath, newPath);
    } else {
        console.log(`Skipping: ${oldName} (not found)`);
    }
});
