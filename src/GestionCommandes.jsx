import React, { useState } from 'react';
import { Search, Filter, Eye, Edit2, Trash2, Download, Plus, Clock, CheckCircle, XCircle, Package, Truck, AlertCircle, Calendar, User, Phone, MapPin } from 'lucide-react';

export default function GestionCommandes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('Tous');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCommande, setSelectedCommande] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const statuses = ['Tous', 'En attente', 'Confirmée', 'En production', 'Prête', 'Livrée', 'Annulée'];

  const commandes = [
    {
      id: 'CMD-2024-001',
      client: { nom: 'Ahmed Benali', tel: '0555 123 456', adresse: '15 Rue des Martyrs, Oran' },
      dateCommande: '08/11/2024',
      dateLivraison: '15/11/2024',
      statut: 'En production',
      montantHT: 142000,
      montantTTC: 169180,
      articles: [
        { produit: 'Fenêtre coulissante', quantite: 2, dimensions: '1.20m × 1.50m', prix: 30000 },
        { produit: 'Porte d\'entrée', quantite: 1, dimensions: '0.90m × 2.15m', prix: 65000 },
        { produit: 'Volet roulant', quantite: 2, dimensions: '1.20m × 1.50m', prix: 44000 }
      ],
      notes: 'Client demande livraison matinée'
    },
    {
      id: 'CMD-2024-002',
      client: { nom: 'Fatima Kader', tel: '0661 234 567', adresse: '32 Cité Es-Salam, Oran' },
      dateCommande: '07/11/2024',
      dateLivraison: '14/11/2024',
      statut: 'Livrée',
      montantHT: 78500,
      montantTTC: 93415,
      articles: [
        { produit: 'Porte d\'entrée blindée', quantite: 1, dimensions: '0.90m × 2.15m', prix: 78500 }
      ],
      notes: ''
    },
    {
      id: 'CMD-2024-003',
      client: { nom: 'Karim Meziane', tel: '0770 345 678', adresse: '8 Boulevard de la Liberté, Oran' },
      dateCommande: '06/11/2024',
      dateLivraison: '13/11/2024',
      statut: 'En attente',
      montantHT: 32000,
      montantTTC: 38080,
      articles: [
        { produit: 'Volet roulant motorisé', quantite: 4, dimensions: '1.00m × 1.20m', prix: 32000 }
      ],
      notes: 'Attente confirmation client'
    },
    {
      id: 'CMD-2024-004',
      client: { nom: 'Leila Sahraoui', tel: '0555 456 789', adresse: '45 Résidence Les Palmiers, Bir El Djir' },
      dateCommande: '05/11/2024',
      dateLivraison: '18/11/2024',
      statut: 'Confirmée',
      montantHT: 95000,
      montantTTC: 113050,
      articles: [
        { produit: 'Baie vitrée coulissante', quantite: 1, dimensions: '3.60m × 2.15m', prix: 95000 }
      ],
      notes: ''
    },
    {
      id: 'CMD-2024-005',
      client: { nom: 'Rachid Bouabdallah', tel: '0661 567 890', adresse: '12 Rue de la Paix, Oran' },
      dateCommande: '04/11/2024',
      dateLivraison: '12/11/2024',
      statut: 'Prête',
      montantHT: 185000,
      montantTTC: 220150,
      articles: [
        { produit: 'Fenêtre oscillo-battante', quantite: 6, dimensions: '0.80m × 1.20m', prix: 99000 },
        { produit: 'Porte-fenêtre', quantite: 2, dimensions: '1.80m × 2.15m', prix: 70000 },
        { produit: 'Garde-corps aluminium', quantite: 2, dimensions: '1.00m × 1.00m', prix: 56000 }
      ],
      notes: 'Prêt pour enlèvement'
    },
    {
      id: 'CMD-2024-006',
      client: { nom: 'Samira Brahimi', tel: '0770 678 901', adresse: '27 Cité 20 Août, Oran' },
      dateCommande: '03/11/2024',
      dateLivraison: '10/11/2024',
      statut: 'Livrée',
      montantHT: 48000,
      montantTTC: 57120,
      articles: [
        { produit: 'Fenêtre battante', quantite: 4, dimensions: '1.00m × 1.40m', prix: 48000 }
      ],
      notes: ''
    },
    {
      id: 'CMD-2024-007',
      client: { nom: 'Construction SARL', tel: '0770 890 123', adresse: 'Zone Industrielle, Oran' },
      dateCommande: '02/11/2024',
      dateLivraison: '20/11/2024',
      statut: 'En production',
      montantHT: 450000,
      montantTTC: 535500,
      articles: [
        { produit: 'Fenêtre coulissante', quantite: 15, dimensions: '1.20m × 1.50m', prix: 225000 },
        { produit: 'Porte d\'entrée', quantite: 5, dimensions: '0.90m × 2.15m', prix: 225000 }
      ],
      notes: 'Chantier neuf - Livraison par lots'
    },
    {
      id: 'CMD-2024-008',
      client: { nom: 'Nabil Hamidi', tel: '0555 789 012', adresse: '5 Avenue de l\'Indépendance, Es Senia' },
      dateCommande: '01/11/2024',
      dateLivraison: '09/11/2024',
      statut: 'Annulée',
      montantHT: 28000,
      montantTTC: 33320,
      articles: [
        { produit: 'Volet battant', quantite: 4, dimensions: '0.60m × 1.40m', prix: 28000 }
      ],
      notes: 'Annulée à la demande du client'
    }
  ];

  const filteredCommandes = commandes.filter(cmd => {
    const matchStatus = selectedStatus === 'Tous' || cmd.statut === selectedStatus;
    const matchSearch = cmd.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       cmd.client.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       cmd.client.tel.includes(searchTerm);
    return matchStatus && matchSearch;
  });

  const getStatusIcon = (statut) => {
    switch(statut) {
      case 'En attente': return Clock;
      case 'Confirmée': return CheckCircle;
      case 'En production': return Package;
      case 'Prête': return AlertCircle;
      case 'Livrée': return Truck;
      case 'Annulée': return XCircle;
      default: return Clock;
    }
  };

  const getStatusColor = (statut) => {
    switch(statut) {
      case 'En attente': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Confirmée': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'En production': return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'Prête': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'Livrée': return 'bg-green-100 text-green-800 border-green-300';
      case 'Annulée': return 'bg-red-100 text-red-800 border-red-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const statsCards = [
    { label: 'Total commandes', value: commandes.length, color: 'bg-blue-500', icon: Package },
    { label: 'En production', value: commandes.filter(c => c.statut === 'En production').length, color: 'bg-purple-500', icon: Package },
    { label: 'Prêtes', value: commandes.filter(c => c.statut === 'Prête').length, color: 'bg-orange-500', icon: AlertCircle },
    { label: 'Livrées ce mois', value: commandes.filter(c => c.statut === 'Livrée').length, color: 'bg-green-500', icon: Truck }
  ];

  const openModal = (commande) => {
    setSelectedCommande(commande);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCommande(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Gestion des Commandes</h1>
              <p className="text-sm text-gray-500 mt-1">{filteredCommandes.length} commandes</p>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Nouvelle commande
            </button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {statsCards.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-2">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher par numéro, client ou téléphone..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter Button */}
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Filtres
            </button>
          </div>

          {/* Status Filters */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {statuses.map(status => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  selectedStatus === status
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status}
                {status !== 'Tous' && (
                  <span className="ml-2 text-xs">
                    ({commandes.filter(c => c.statut === status).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Commandes Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Commande</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Client</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Date commande</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Livraison prévue</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Articles</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Montant TTC</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Statut</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCommandes.map((commande) => {
                  const StatusIcon = getStatusIcon(commande.statut);
                  return (
                    <tr key={commande.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4">
                        <div className="font-semibold text-blue-600">{commande.id}</div>
                        <div className="text-xs text-gray-500">{commande.articles.length} article(s)</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-semibold text-gray-900">{commande.client.nom}</div>
                        <div className="text-xs text-gray-500 flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          {commande.client.tel}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-sm text-gray-700 flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          {commande.dateCommande}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-sm font-medium text-gray-900">{commande.dateLivraison}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-sm text-gray-700">
                          {commande.articles.slice(0, 2).map((art, idx) => (
                            <div key={idx} className="text-xs">• {art.produit}</div>
                          ))}
                          {commande.articles.length > 2 && (
                            <div className="text-xs text-blue-600">+{commande.articles.length - 2} autre(s)</div>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-bold text-gray-900">{commande.montantTTC.toLocaleString()} DA</div>
                        <div className="text-xs text-gray-500">HT: {commande.montantHT.toLocaleString()} DA</div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 w-fit ${getStatusColor(commande.statut)}`}>
                          <StatusIcon className="w-3 h-3" />
                          {commande.statut}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex gap-2 justify-end">
                          <button
                            onClick={() => openModal(commande)}
                            className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200"
                            title="Voir détails"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100" title="Modifier">
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100" title="Télécharger">
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Details */}
      {showModal && selectedCommande && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-6 pb-6 border-b border-gray-200">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedCommande.id}</h2>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border flex items-center gap-1 ${getStatusColor(selectedCommande.statut)}`}>
                      {React.createElement(getStatusIcon(selectedCommande.statut), { className: "w-4 h-4" })}
                      {selectedCommande.statut}
                    </span>
                    <span className="text-sm text-gray-500">
                      Commandé le {selectedCommande.dateCommande}
                    </span>
                  </div>
                </div>
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                  <XCircle className="w-6 h-6" />
                </button>
              </div>

              {/* Client Info */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Informations Client
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <User className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <div className="text-xs text-gray-500">Nom</div>
                      <div className="font-semibold text-gray-900">{selectedCommande.client.nom}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Phone className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <div className="text-xs text-gray-500">Téléphone</div>
                      <div className="font-semibold text-gray-900">{selectedCommande.client.tel}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg col-span-2">
                    <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <div className="text-xs text-gray-500">Adresse de livraison</div>
                      <div className="font-semibold text-gray-900">{selectedCommande.client.adresse}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Articles */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Articles commandés
                </h3>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left py-2 px-4 text-xs font-semibold text-gray-600">Produit</th>
                        <th className="text-left py-2 px-4 text-xs font-semibold text-gray-600">Dimensions</th>
                        <th className="text-center py-2 px-4 text-xs font-semibold text-gray-600">Quantité</th>
                        <th className="text-right py-2 px-4 text-xs font-semibold text-gray-600">Prix</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedCommande.articles.map((article, idx) => (
                        <tr key={idx} className="border-t border-gray-100">
                          <td className="py-3 px-4 text-sm text-gray-900">{article.produit}</td>
                          <td className="py-3 px-4 text-sm text-gray-600">{article.dimensions}</td>
                          <td className="py-3 px-4 text-sm text-gray-900 text-center">{article.quantite}</td>
                          <td className="py-3 px-4 text-sm font-semibold text-gray-900 text-right">
                            {article.prix.toLocaleString()} DA
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Totals */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Sous-total HT:</span>
                    <span className="font-semibold text-gray-900">{selectedCommande.montantHT.toLocaleString()} DA</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">TVA (19%):</span>
                    <span className="font-semibold text-gray-900">
                      {(selectedCommande.montantTTC - selectedCommande.montantHT).toLocaleString()} DA
                    </span>
                  </div>
                  <div className="flex justify-between text-lg pt-2 border-t border-gray-200">
                    <span className="font-bold text-gray-900">Total TTC:</span>
                    <span className="font-bold text-blue-600">{selectedCommande.montantTTC.toLocaleString()} DA</span>
                  </div>
                </div>
              </div>

              {/* Dates */}
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-xs text-blue-700">Date de commande</div>
                    <div className="font-semibold text-blue-900">{selectedCommande.dateCommande}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                  <Truck className="w-5 h-5 text-orange-600" />
                  <div>
                    <div className="text-xs text-orange-700">Livraison prévue</div>
                    <div className="font-semibold text-orange-900">{selectedCommande.dateLivraison}</div>
                  </div>
                </div>
              </div>

              {/* Notes */}
              {selectedCommande.notes && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Notes</h3>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-yellow-900">
                    {selectedCommande.notes}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold flex items-center justify-center gap-2">
                  <Edit2 className="w-4 h-4" />
                  Modifier
                </button>
                <button className="flex-1 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Télécharger PDF
                </button>
                <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold">
                  Annuler
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}