import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2, Eye, Filter, Grid, List, Package, DollarSign, Ruler, Palette } from 'lucide-react';

export default function CatalogueProduits() {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = ['Tous', 'Fenêtres', 'Portes', 'Volets', 'Baies vitrées', 'Garde-corps'];

  const produits = [
    {
      id: 1,
      nom: 'Fenêtre Coulissante',
      categorie: 'Fenêtres',
      description: 'Fenêtre coulissante en aluminium avec double vitrage',
      prixBase: 15000,
      image: '🪟',
      stock: 45,
      couleurs: ['Blanc', 'Gris', 'Noir'],
      dimensions: { largeur: '1.20m', hauteur: '1.50m' },
      reference: 'FEN-C-001',
      ventes: 156
    },
    {
      id: 2,
      nom: 'Fenêtre Battante',
      categorie: 'Fenêtres',
      description: 'Fenêtre battante 2 vantaux avec vitrage renforcé',
      prixBase: 12000,
      image: '🪟',
      stock: 32,
      couleurs: ['Blanc', 'Marron', 'Beige'],
      dimensions: { largeur: '1.00m', hauteur: '1.40m' },
      reference: 'FEN-B-002',
      ventes: 134
    },
    {
      id: 3,
      nom: 'Porte d\'Entrée Blindée',
      categorie: 'Portes',
      description: 'Porte d\'entrée blindée avec serrure 3 points',
      prixBase: 65000,
      image: '🚪',
      stock: 18,
      couleurs: ['Noir', 'Gris anthracite', 'Marron'],
      dimensions: { largeur: '0.90m', hauteur: '2.15m' },
      reference: 'POR-E-001',
      ventes: 89
    },
    {
      id: 4,
      nom: 'Porte-Fenêtre 2 Vantaux',
      categorie: 'Portes',
      description: 'Porte-fenêtre coulissante 2 vantaux avec seuil plat',
      prixBase: 35000,
      image: '🚪',
      stock: 25,
      couleurs: ['Blanc', 'Gris', 'Beige'],
      dimensions: { largeur: '1.80m', hauteur: '2.15m' },
      reference: 'POR-F-002',
      ventes: 112
    },
    {
      id: 5,
      nom: 'Volet Roulant Motorisé',
      categorie: 'Volets',
      description: 'Volet roulant avec moteur électrique et télécommande',
      prixBase: 22000,
      image: '🎚️',
      stock: 38,
      couleurs: ['Blanc', 'Gris', 'Beige', 'Marron'],
      dimensions: { largeur: '1.20m', hauteur: '1.50m' },
      reference: 'VOL-R-001',
      ventes: 203
    },
    {
      id: 6,
      nom: 'Volet Battant Alu',
      categorie: 'Volets',
      description: 'Volet battant en aluminium avec persiennes orientables',
      prixBase: 18000,
      image: '🎚️',
      stock: 29,
      couleurs: ['Blanc', 'Vert', 'Bleu', 'Gris'],
      dimensions: { largeur: '0.60m', hauteur: '1.40m' },
      reference: 'VOL-B-002',
      ventes: 98
    },
    {
      id: 7,
      nom: 'Baie Vitrée Coulissante',
      categorie: 'Baies vitrées',
      description: 'Baie vitrée 3 vantaux avec double vitrage phonique',
      prixBase: 85000,
      image: '🏠',
      stock: 12,
      couleurs: ['Blanc', 'Gris', 'Noir'],
      dimensions: { largeur: '3.60m', hauteur: '2.15m' },
      reference: 'BAI-C-001',
      ventes: 67
    },
    {
      id: 8,
      nom: 'Baie Vitrée Pliante',
      categorie: 'Baies vitrées',
      description: 'Baie vitrée accordéon 4 vantaux pour terrasse',
      prixBase: 95000,
      image: '🏠',
      stock: 8,
      couleurs: ['Blanc', 'Gris anthracite'],
      dimensions: { largeur: '4.00m', hauteur: '2.15m' },
      reference: 'BAI-P-002',
      ventes: 45
    },
    {
      id: 9,
      nom: 'Garde-Corps Aluminium',
      categorie: 'Garde-corps',
      description: 'Garde-corps en aluminium pour balcon ou terrasse',
      prixBase: 28000,
      image: '⚡',
      stock: 22,
      couleurs: ['Gris', 'Noir', 'Blanc'],
      dimensions: { largeur: '1.00m', hauteur: '1.00m' },
      reference: 'GAR-A-001',
      ventes: 78
    },
    {
      id: 10,
      nom: 'Fenêtre Oscillo-Battante',
      categorie: 'Fenêtres',
      description: 'Fenêtre oscillo-battante avec double système d\'ouverture',
      prixBase: 16500,
      image: '🪟',
      stock: 35,
      couleurs: ['Blanc', 'Gris', 'Beige'],
      dimensions: { largeur: '0.80m', hauteur: '1.20m' },
      reference: 'FEN-O-003',
      ventes: 142
    },
    {
      id: 11,
      nom: 'Porte Coulissante Vitrée',
      categorie: 'Portes',
      description: 'Porte coulissante intérieure avec cadre aluminium',
      prixBase: 28000,
      image: '🚪',
      stock: 19,
      couleurs: ['Gris', 'Noir', 'Blanc'],
      dimensions: { largeur: '0.93m', hauteur: '2.04m' },
      reference: 'POR-C-003',
      ventes: 91
    },
    {
      id: 12,
      nom: 'Fenêtre Fixe Panoramique',
      categorie: 'Fenêtres',
      description: 'Fenêtre fixe grand format pour vue panoramique',
      prixBase: 24000,
      image: '🪟',
      stock: 14,
      couleurs: ['Blanc', 'Gris', 'Noir'],
      dimensions: { largeur: '2.00m', hauteur: '1.80m' },
      reference: 'FEN-F-004',
      ventes: 63
    }
  ];

  const filteredProducts = produits.filter(produit => {
    const matchCategory = selectedCategory === 'Tous' || produit.categorie === selectedCategory;
    const matchSearch = produit.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        produit.reference.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const getStockStatus = (stock) => {
    if (stock > 30) return { label: 'En stock', color: 'bg-green-100 text-green-800' };
    if (stock > 10) return { label: 'Stock limité', color: 'bg-orange-100 text-orange-800' };
    return { label: 'Stock faible', color: 'bg-red-100 text-red-800' };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Catalogue Produits</h1>
              <p className="text-sm text-gray-500 mt-1">{filteredProducts.length} produits disponibles</p>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Nouveau produit
            </button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Filters & Search */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher par nom ou référence..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* View Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(produit => {
              const stockStatus = getStockStatus(produit.stock);
              return (
                <div
                  key={produit.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedProduct(produit)}
                >
                  {/* Image */}
                  <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 h-48 flex items-center justify-center">
                    <span className="text-6xl">{produit.image}</span>
                    <div className="absolute top-3 right-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${stockStatus.color}`}>
                        {stockStatus.label}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="mb-2">
                      <span className="text-xs text-gray-500">{produit.reference}</span>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{produit.nom}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{produit.description}</p>
                    </div>

                    <div className="space-y-2 mb-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Ruler className="w-4 h-4" />
                        {produit.dimensions.largeur} × {produit.dimensions.hauteur}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Package className="w-4 h-4" />
                        Stock: {produit.stock} unités
                      </div>
                      <div className="flex items-center gap-1">
                        <Palette className="w-4 h-4 text-gray-600" />
                        <div className="flex gap-1">
                          {produit.couleurs.slice(0, 3).map((couleur, idx) => (
                            <div
                              key={idx}
                              className="w-5 h-5 rounded-full border-2 border-gray-200"
                              style={{
                                backgroundColor: couleur === 'Blanc' ? '#ffffff' :
                                              couleur === 'Noir' ? '#000000' :
                                              couleur === 'Gris' ? '#6b7280' :
                                              couleur === 'Gris anthracite' ? '#374151' :
                                              couleur === 'Marron' ? '#92400e' :
                                              couleur === 'Beige' ? '#d4b896' :
                                              couleur === 'Vert' ? '#059669' :
                                              couleur === 'Bleu' ? '#2563eb' : '#e5e7eb'
                              }}
                              title={couleur}
                            />
                          ))}
                          {produit.couleurs.length > 3 && (
                            <span className="text-xs text-gray-500 ml-1">+{produit.couleurs.length - 3}</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div>
                        <div className="text-xs text-gray-500">Prix à partir de</div>
                        <div className="text-xl font-bold text-blue-600">
                          {produit.prixBase.toLocaleString()} DA
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-3 text-xs text-gray-500 flex items-center justify-between">
                      <span>📊 {produit.ventes} ventes</span>
                      <span className="text-green-600 font-medium">Populaire</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* List View */
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Produit</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Catégorie</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Référence</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Dimensions</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Prix base</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Stock</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Ventes</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((produit) => {
  const stockStatus = getStockStatus(produit.stock);
  return (
                    <tr key={produit.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center text-2xl">
                            {produit.image}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{produit.nom}</div>
                            <div className="text-xs text-gray-500">{produit.description.substring(0, 40)}...</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-700">{produit.categorie}</td>
                      <td className="py-4 px-4 text-sm font-mono text-gray-600">{produit.reference}</td>
                      <td className="py-4 px-4 text-sm text-gray-700">
                        {produit.dimensions.largeur} × {produit.dimensions.hauteur}
                      </td>
                      <td className="py-4 px-4 text-sm font-semibold text-gray-900">
                        {produit.prixBase.toLocaleString()} DA
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${stockStatus.color}`}>
                          {produit.stock}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-700">{produit.ventes}</td>
                      <td className="py-4 px-4">
                        <div className="flex gap-2 justify-end">
                          <button 
                            onClick={() => setSelectedProduct(produit)}
                            className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.nom}</h2>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <span className="text-2xl">×</span>
                </button>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg h-64 flex items-center justify-center mb-6">
                <span className="text-8xl">{selectedProduct.image}</span>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Informations</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Référence:</span>
                      <span className="ml-2 font-mono text-gray-900">{selectedProduct.reference}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Catégorie:</span>
                      <span className="ml-2 text-gray-900">{selectedProduct.categorie}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Dimensions:</span>
                      <span className="ml-2 text-gray-900">
                        {selectedProduct.dimensions.largeur} × {selectedProduct.dimensions.hauteur}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Stock:</span>
                      <span className="ml-2 font-semibold text-gray-900">{selectedProduct.stock} unités</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-700">{selectedProduct.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Couleurs disponibles</h3>
                  <div className="flex gap-2">
                    {selectedProduct.couleurs.map((couleur, idx) => (
                      <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                        <div
                          className="w-6 h-6 rounded-full border-2 border-gray-300"
                          style={{
                            backgroundColor: couleur === 'Blanc' ? '#ffffff' :
                                          couleur === 'Noir' ? '#000000' :
                                          couleur === 'Gris' ? '#6b7280' :
                                          couleur === 'Gris anthracite' ? '#374151' :
                                          couleur === 'Marron' ? '#92400e' :
                                          couleur === 'Beige' ? '#d4b896' :
                                          couleur === 'Vert' ? '#059669' :
                                          couleur === 'Bleu' ? '#2563eb' : '#e5e7eb'
                          }}
                        />
                        <span className="text-sm text-gray-700">{couleur}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600">Prix de base</div>
                      <div className="text-3xl font-bold text-blue-600">
                        {selectedProduct.prixBase.toLocaleString()} DA
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Nombre de ventes</div>
                      <div className="text-2xl font-bold text-gray-900">{selectedProduct.ventes}</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold">
                    Modifier le produit
                  </button>
                  <button className="px-4 py-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 font-semibold">
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}