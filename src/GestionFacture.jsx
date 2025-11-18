import React, { useState } from 'react';
import { Search, Filter, Eye, Download, Send, DollarSign, AlertCircle, CheckCircle, Clock, XCircle, Calendar, User, CreditCard, FileText, Printer } from 'lucide-react';

export default function GestionFactures() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('Tous');
  const [selectedFacture, setSelectedFacture] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const statuses = ['Tous', 'Payée', 'En attente', 'En retard', 'Annulée'];

  const factures = [
    {
      id: 'FAC-2024-001',
      numeroFacture: 'F-001/2024',
      commande: 'CMD-2024-001',
      client: { nom: 'Ahmed Benali', tel: '0555 123 456', email: 'ahmed.benali@email.dz', adresse: '15 Rue des Martyrs, Oran' },
      dateEmission: '08/11/2024',
      dateEcheance: '23/11/2024',
      montantHT: 142000,
      tva: 26980,
      montantTTC: 169180,
      montantPaye: 169180,
      statut: 'Payée',
      modePaiement: 'Virement bancaire',
      datePaiement: '10/11/2024',
      articles: [
        { designation: 'Fenêtre coulissante 1.20m × 1.50m', quantite: 2, prixUnitaire: 15000, total: 30000 },
        { designation: 'Porte d\'entrée 0.90m × 2.15m', quantite: 1, prixUnitaire: 65000, total: 65000 },
        { designation: 'Volet roulant 1.20m × 1.50m', quantite: 2, prixUnitaire: 22000, total: 44000 },
        { designation: 'Installation et pose', quantite: 1, prixUnitaire: 3000, total: 3000 }
      ]
    },
    {
      id: 'FAC-2024-002',
      numeroFacture: 'F-002/2024',
      commande: 'CMD-2024-002',
      client: { nom: 'Fatima Kader', tel: '0661 234 567', email: 'fatima.kader@email.dz', adresse: '32 Cité Es-Salam, Oran' },
      dateEmission: '07/11/2024',
      dateEcheance: '22/11/2024',
      montantHT: 78500,
      tva: 14915,
      montantTTC: 93415,
      montantPaye: 93415,
      statut: 'Payée',
      modePaiement: 'Espèces',
      datePaiement: '07/11/2024',
      articles: [
        { designation: 'Porte d\'entrée blindée 0.90m × 2.15m', quantite: 1, prixUnitaire: 78500, total: 78500 }
      ]
    },
    {
      id: 'FAC-2024-003',
      numeroFacture: 'F-003/2024',
      commande: 'CMD-2024-003',
      client: { nom: 'Karim Meziane', tel: '0770 345 678', email: 'karim.meziane@email.dz', adresse: '8 Boulevard de la Liberté, Oran' },
      dateEmission: '06/11/2024',
      dateEcheance: '21/11/2024',
      montantHT: 32000,
      tva: 6080,
      montantTTC: 38080,
      montantPaye: 0,
      statut: 'En attente',
      modePaiement: null,
      datePaiement: null,
      articles: [
        { designation: 'Volet roulant motorisé 1.00m × 1.20m', quantite: 4, prixUnitaire: 8000, total: 32000 }
      ]
    },
    {
      id: 'FAC-2024-004',
      numeroFacture: 'F-004/2024',
      commande: 'CMD-2024-004',
      client: { nom: 'Leila Sahraoui', tel: '0555 456 789', email: 'leila.sahraoui@email.dz', adresse: '45 Résidence Les Palmiers, Bir El Djir' },
      dateEmission: '05/11/2024',
      dateEcheance: '20/11/2024',
      montantHT: 95000,
      tva: 18050,
      montantTTC: 113050,
      montantPaye: 0,
      statut: 'En attente',
      modePaiement: null,
      datePaiement: null,
      articles: [
        { designation: 'Baie vitrée coulissante 3.60m × 2.15m', quantite: 1, prixUnitaire: 95000, total: 95000 }
      ]
    },
    {
      id: 'FAC-2024-005',
      numeroFacture: 'F-005/2024',
      commande: 'CMD-2024-005',
      client: { nom: 'Rachid Bouabdallah', tel: '0661 567 890', email: 'rachid.b@email.dz', adresse: '12 Rue de la Paix, Oran' },
      dateEmission: '02/11/2024',
      dateEcheance: '17/11/2024',
      montantHT: 185000,
      tva: 35150,
      montantTTC: 220150,
      montantPaye: 100000,
      statut: 'En attente',
      modePaiement: 'Paiement partiel - Chèque',
      datePaiement: '05/11/2024',
      articles: [
        { designation: 'Fenêtre oscillo-battante 0.80m × 1.20m', quantite: 6, prixUnitaire: 16500, total: 99000 },
        { designation: 'Porte-fenêtre 1.80m × 2.15m', quantite: 2, prixUnitaire: 35000, total: 70000 },
        { designation: 'Garde-corps aluminium 1.00m × 1.00m', quantite: 2, prixUnitaire: 28000, total: 56000 }
      ]
    },
    {
      id: 'FAC-2024-006',
      numeroFacture: 'F-006/2024',
      commande: 'CMD-2024-006',
      client: { nom: 'Samira Brahimi', tel: '0770 678 901', email: 'samira.brahimi@email.dz', adresse: '27 Cité 20 Août, Oran' },
      dateEmission: '01/11/2024',
      dateEcheance: '08/11/2024',
      montantHT: 48000,
      tva: 9120,
      montantTTC: 57120,
      montantPaye: 0,
      statut: 'En retard',
      modePaiement: null,
      datePaiement: null,
      articles: [
        { designation: 'Fenêtre battante 1.00m × 1.40m', quantite: 4, prixUnitaire: 12000, total: 48000 }
      ]
    },
    {
      id: 'FAC-2024-007',
      numeroFacture: 'F-007/2024',
      commande: 'CMD-2024-007',
      client: { nom: 'Construction SARL', tel: '0770 890 123', email: 'contact@construction-sarl.dz', adresse: 'Zone Industrielle, Oran' },
      dateEmission: '30/10/2024',
      dateEcheance: '30/11/2024',
      montantHT: 450000,
      tva: 85500,
      montantTTC: 535500,
      montantPaye: 0,
      statut: 'En attente',
      modePaiement: null,
      datePaiement: null,
      articles: [
        { designation: 'Fenêtre coulissante 1.20m × 1.50m', quantite: 15, prixUnitaire: 15000, total: 225000 },
        { designation: 'Porte d\'entrée 0.90m × 2.15m', quantite: 5, prixUnitaire: 45000, total: 225000 }
      ]
    }
  ];

  const filteredFactures = factures.filter(facture => {
    const matchStatus = selectedStatus === 'Tous' || facture.statut === selectedStatus;
    const matchSearch = facture.numeroFacture.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       facture.client.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       facture.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchStatus && matchSearch;
  });

  const getStatusIcon = (statut) => {
    switch(statut) {
      case 'Payée': return CheckCircle;
      case 'En attente': return Clock;
      case 'En retard': return AlertCircle;
      case 'Annulée': return XCircle;
      default: return Clock;
    }
  };

  const getStatusColor = (statut) => {
    switch(statut) {
      case 'Payée': return 'bg-green-100 text-green-800 border-green-300';
      case 'En attente': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'En retard': return 'bg-red-100 text-red-800 border-red-300';
      case 'Annulée': return 'bg-gray-100 text-gray-800 border-gray-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const calculateTotalCA = () => {
    return factures.filter(f => f.statut === 'Payée').reduce((sum, f) => sum + f.montantTTC, 0);
  };

  const calculateTotalEnAttente = () => {
    return factures.filter(f => f.statut === 'En attente' || f.statut === 'En retard').reduce((sum, f) => sum + (f.montantTTC - f.montantPaye), 0);
  };

  const statsCards = [
    { label: 'Total factures', value: factures.length, icon: FileText, color: 'bg-blue-500' },
    { label: 'Chiffre d\'affaires', value: `${calculateTotalCA().toLocaleString()} DA`, icon: DollarSign, color: 'bg-green-500' },
    { label: 'En attente', value: `${calculateTotalEnAttente().toLocaleString()} DA`, icon: Clock, color: 'bg-orange-500' },
    { label: 'Factures payées', value: factures.filter(f => f.statut === 'Payée').length, icon: CheckCircle, color: 'bg-purple-500' }
  ];

  const openModal = (facture) => {
    setSelectedFacture(facture);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedFacture(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Gestion des Factures</h1>
              <p className="text-sm text-gray-500 mt-1">{filteredFactures.length} factures</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                <Download className="w-4 h-4" />
                Exporter
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Nouvelle facture
              </button>
            </div>
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
                placeholder="Rechercher par numéro de facture, client..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
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
                    ({factures.filter(f => f.statut === status).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Factures Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">N° Facture</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Client</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Date émission</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Échéance</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Montant TTC</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Payé</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Statut</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredFactures.map((facture) => {
                  const StatusIcon = getStatusIcon(facture.statut);
                  const reste = facture.montantTTC - facture.montantPaye;
                  return (
                    <tr key={facture.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4">
                        <div className="font-semibold text-blue-600">{facture.numeroFacture}</div>
                        <div className="text-xs text-gray-500">{facture.commande}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-semibold text-gray-900">{facture.client.nom}</div>
                        <div className="text-xs text-gray-500">{facture.client.tel}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-sm text-gray-700 flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          {facture.dateEmission}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-sm font-medium text-gray-900">{facture.dateEcheance}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-bold text-gray-900">{facture.montantTTC.toLocaleString()} DA</div>
                        <div className="text-xs text-gray-500">HT: {facture.montantHT.toLocaleString()} DA</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-sm">
                          <div className="font-semibold text-green-600">{facture.montantPaye.toLocaleString()} DA</div>
                          {reste > 0 && (
                            <div className="text-xs text-orange-600">Reste: {reste.toLocaleString()} DA</div>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 w-fit ${getStatusColor(facture.statut)}`}>
                          <StatusIcon className="w-3 h-3" />
                          {facture.statut}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex gap-2 justify-end">
                          <button
                            onClick={() => openModal(facture)}
                            className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200"
                            title="Voir détails"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100" title="Télécharger PDF">
                            <Download className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100" title="Envoyer par email">
                            <Send className="w-4 h-4" />
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
      {showModal && selectedFacture && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Invoice Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-3xl font-bold mb-2">🪟</div>
                  <h2 className="text-2xl font-bold">FACTURE</h2>
                  <p className="text-blue-100 mt-1">Menuiserie Aluminium</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">{selectedFacture.numeroFacture}</div>
                  <div className="mt-2 text-blue-100 text-sm">
                    <div>Date: {selectedFacture.dateEmission}</div>
                    <div>Échéance: {selectedFacture.dateEcheance}</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <div className="font-semibold mb-2">Entreprise:</div>
                  <div className="text-blue-100">
                    <div>Menuiserie Aluminium</div>
                    <div>Zone Industrielle, Oran</div>
                    <div>Tél: 041 XX XX XX</div>
                    <div>Email: contact@menuiserie.dz</div>
                  </div>
                </div>
                <div>
                  <div className="font-semibold mb-2">Facturé à:</div>
                  <div className="text-blue-100">
                    <div className="font-semibold text-white">{selectedFacture.client.nom}</div>
                    <div>{selectedFacture.client.adresse}</div>
                    <div>Tél: {selectedFacture.client.tel}</div>
                    <div>Email: {selectedFacture.client.email}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Status Badge */}
              <div className="mb-6 flex items-center justify-between">
                <span className={`px-4 py-2 rounded-full text-sm font-medium border flex items-center gap-2 ${getStatusColor(selectedFacture.statut)}`}>
                  {React.createElement(getStatusIcon(selectedFacture.statut), { className: "w-4 h-4" })}
                  {selectedFacture.statut}
                </span>
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                  <XCircle className="w-6 h-6" />
                </button>
              </div>

              {/* Articles */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Détails de la facture</h3>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Désignation</th>
                        <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">Qté</th>
                        <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Prix unit.</th>
                        <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedFacture.articles.map((article, idx) => (
                        <tr key={idx} className="border-t border-gray-100">
                          <td className="py-3 px-4 text-sm text-gray-900">{article.designation}</td>
                          <td className="py-3 px-4 text-sm text-gray-900 text-center">{article.quantite}</td>
                          <td className="py-3 px-4 text-sm text-gray-900 text-right">{article.prixUnitaire.toLocaleString()} DA</td>
                          <td className="py-3 px-4 text-sm font-semibold text-gray-900 text-right">{article.total.toLocaleString()} DA</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Totals */}
              <div className="mb-6">
                <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Sous-total HT:</span>
                    <span className="font-semibold text-gray-900">{selectedFacture.montantHT.toLocaleString()} DA</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">TVA (19%):</span>
                    <span className="font-semibold text-gray-900">{selectedFacture.tva.toLocaleString()} DA</span>
                  </div>
                  <div className="border-t border-gray-300 pt-3 flex justify-between text-lg">
                    <span className="font-bold text-gray-900">Total TTC:</span>
                    <span className="font-bold text-blue-600">{selectedFacture.montantTTC.toLocaleString()} DA</span>
                  </div>
                  {selectedFacture.montantPaye > 0 && (
                    <>
                      <div className="flex justify-between text-sm text-green-600">
                        <span>Montant payé:</span>
                        <span className="font-semibold">{selectedFacture.montantPaye.toLocaleString()} DA</span>
                      </div>
                      {selectedFacture.montantTTC - selectedFacture.montantPaye > 0 && (
                        <div className="flex justify-between text-sm text-orange-600">
                          <span className="font-semibold">Reste à payer:</span>
                          <span className="font-bold">{(selectedFacture.montantTTC - selectedFacture.montantPaye).toLocaleString()} DA</span>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Payment Info */}
              {selectedFacture.statut === 'Payée' && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <h4 className="font-semibold text-green-900">Paiement effectué</h4>
                  </div>
                  <div className="text-sm text-green-800 space-y-1 ml-8">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4" />
                      Mode: {selectedFacture.modePaiement}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Date: {selectedFacture.datePaiement}
                    </div>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Télécharger PDF
                </button>
                <button className="flex-1 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Envoyer par email
                </button>
                <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold flex items-center gap-2">
                  <Printer className="w-4 h-4" />
                  Imprimer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}