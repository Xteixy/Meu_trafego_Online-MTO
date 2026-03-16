const fs = require('fs');

const produtosFile = 'app/produtos/page.tsx';
const servicosFile = 'app/portfolio/page.tsx';

try {
    const produtosContent = fs.readFileSync(produtosFile, 'utf8');
    const servicosContent = fs.readFileSync(servicosFile, 'utf8');

    const servCategoriesStartStr = '{/* Service Categories */}';
    const ctaIndexServ = servicosContent.indexOf('{/* CTA Section */}');

    if (ctaIndexServ === -1 || servicosContent.indexOf(servCategoriesStartStr) === -1) {
        console.log("Could not find sections in servicos!");
        process.exit(1);
    }

    const servCategoriesStartIndex = servicosContent.indexOf(servCategoriesStartStr);
    const extractedServices = servicosContent.substring(servCategoriesStartIndex, ctaIndexServ);

    const targetAppendStr = '{/* CTA Section */}';
    const ctaIndexProd = produtosContent.indexOf(targetAppendStr);

    if (ctaIndexProd === -1) {
        console.log("CTA not found in produtos!");
        process.exit(1);
    }

    const newProdutosContent =
        produtosContent.substring(0, ctaIndexProd) +
        "\n\n      {/* --- IMPORTED SERVICES CONTENT --- */}\n      " +
        extractedServices + "\n" +
        produtosContent.substring(ctaIndexProd);

    fs.writeFileSync(produtosFile, newProdutosContent);
    console.log("Merge completed successfully.");
} catch (e) {
    console.error("Error:", e);
}
