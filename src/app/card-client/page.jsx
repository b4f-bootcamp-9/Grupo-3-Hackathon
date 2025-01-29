'use client'
import React, { useState, useEffect } from 'react';
import { Archive, PlusCircle } from 'lucide-react';
import styles from "@/client/styles/cardClient.module.css";
import NewClientModal from '@/client/components/newClient';

const ArquivarButton = ({ onArchive, clientId }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onArchive(clientId);
      }}
      className={styles.archiveButton}
      title="Arquivar"
    >
      <Archive className={styles.archiveIcon} />
    </button>
  );
};

const CardClientPage = () => {
  const [clientes, setClientes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const initialClientes = [
        {
          _id: '1',
          name: 'Alina Silva',
          contact: '(351) 915-765-432',
          email: 'alina.silva@email.com',
          valorMaximo: 450000,
          tipoImovel: 'Apartamento',
          localizacaoDesejada: 'Lisboa, Distrito de Lisboa',
          requisitos: {
            quartosDesejados: 3,
            banheirosDesejados: 2,
            areaMinima: 120,
            extras: ['Piscina', 'Área Externa', 'Garagem']
          }
        },
        {
                _id: '2',
                name: 'Pedro Santos',
                contact: '(351) 912-345-678',
                email: 'pedro.santos@email.com',
                valorMaximo: 380000,
                tipoImovel: 'Casa',
                localizacaoDesejada: 'Cascais, Distrito de Lisboa',
                requisitos: {
                  quartosDesejados: 4,
                  banheirosDesejados: 3,
                  areaMinima: 200,
                  extras: ['Piscina', 'Garagem']
                }
              },
              {
                      _id: '3',
                      name: 'Izadora Oliveira',
                      contact: '(351) 927-777-888',
                      email: 'izadora.oliveira@email.com',
                      valorMaximo: 650000,
                      tipoImovel: 'Apartamento',
                      localizacaoDesejada: 'Oeiras, Distrito de Lisboa',
                      requisitos: {
                        quartosDesejados: 2,
                        banheirosDesejados: 1,
                        areaMinima: 70,
                        extras: ['Área Externa', 'Garagem']
                      }
                    },
                    {
                      _id: '4',
                      name: 'Simone Beatriz',
                      contact: '(351) 935-555-444',
                      email: 'simone.beatriz@email.com',
                      valorMaximo: 290000,
                      tipoImovel: 'Casa',
                      localizacaoDesejada: 'Sintra, Distrito de Lisboa',
                      requisitos: {
                        quartosDesejados: 3,
                        banheirosDesejados: 2,
                        areaMinima: 150,
                        extras: ['Piscina', 'Área Externa']
                      }
                    },
                    {
                      _id: '5',
                      name: 'Ariane Henrique',
                      contact: '(351) 963-333-222',
                      email: 'ariane.h@email.com',
                      valorMaximo: 550000,
                      tipoImovel: 'Apartamento',
                      localizacaoDesejada: 'Amadora, Distrito de Lisboa',
                      requisitos: {
                        quartosDesejados: 2,
                        banheirosDesejados: 2,
                        areaMinima: 90,
                        extras: ['Garagem', 'Área Externa']
                      }
                    },
                    {
                      _id: '6',
                      name: 'Rafael Costa',
                      contact: '(351) 917-777-666',
                      email: 'rafael.costa@email.com',
                      valorMaximo: 850000,
                      tipoImovel: 'Casa',
                      localizacaoDesejada: 'Loures, Distrito de Lisboa',
                      requisitos: {
                        quartosDesejados: 4,
                        banheirosDesejados: 3,
                        areaMinima: 250,
                        extras: ['Piscina', 'Garagem', 'Área Externa']
                      }
                    },
                    {
                      _id: '7',
                      name: 'Gabriel Santos',
                      contact: '(351) 968-888-999',
                      email: 'gabriel.santos@email.com',
                      valorMaximo: 420000,
                      tipoImovel: 'Apartamento',
                      localizacaoDesejada: 'Odivelas, Distrito de Lisboa',
                      requisitos: {
                        quartosDesejados: 2,
                        banheirosDesejados: 1,
                        areaMinima: 80,
                        extras: ['Garagem']
                      }
                    },
                    {
                      _id: '8',
                      name: 'Daniel Lima',
                      contact: '(351) 964-444-333',
                      email: 'daniel.lima@email.com',
                      valorMaximo: 980000,
                      tipoImovel: 'Casa',
                      localizacaoDesejada: 'Mafra, Distrito de Lisboa',
                      requisitos: {
                        quartosDesejados: 3,
                        banheirosDesejados: 3,
                        areaMinima: 180,
                        extras: ['Piscina', 'Área Externa', 'Garagem']
                      }
                    },
                    {
                      _id: '9',
                      name: 'Shara Oliveira',
                      contact: '(351) 916-666-777',
                      email: 'shara.o@email.com',
                      valorMaximo: 350000,
                      tipoImovel: 'Apartamento',
                      localizacaoDesejada: 'Lisboa, Distrito de Lisboa',
                      requisitos: {
                        quartosDesejados: 3,
                        banheirosDesejados: 2,
                        areaMinima: 110,
                        extras: ['Garagem', 'Área Externa']
                      }
                    },
                    {
                      _id: '10',
                      name: 'Francisco Santos',
                      contact: '(351) 922-221-111',
                      email: 'francisco.s@email.com',
                      valorMaximo: 480000,
                      tipoImovel: 'Casa',
                      localizacaoDesejada: 'Vila Franca de Xira, Distrito de Lisboa',
                      requisitos: {
                        quartosDesejados: 3,
                        banheirosDesejados: 2,
                        areaMinima: 140,
                        extras: ['Piscina', 'Garagem']
                      }
                    },
                    {
                      _id: '11',
                      name: 'Ivanildo Pereira',
                      contact: '(351) 919-999-888',
                      email: 'ivanildo.p@email.com',
                      valorMaximo: 750000,
                      tipoImovel: 'Apartamento',
                      localizacaoDesejada: 'Cascais, Distrito de Lisboa',
                      requisitos: {
                        quartosDesejados: 4,
                        banheirosDesejados: 3,
                        areaMinima: 200,
                        extras: ['Piscina', 'Área Externa', 'Garagem']
                      }
                    }
                
            ];

  useEffect(() => {
    const clientesComVaranda = initialClientes.map(cliente => {
      if (cliente.requisitos.extras.includes('Piscina')) {
        return {
          ...cliente,
          requisitos: {
            ...cliente.requisitos,
            extras: [...cliente.requisitos.extras, 'Varanda']
          }
        };
      }
      return cliente;
    });
    setClientes(clientesComVaranda);
  }, []);

  const handleArchive = (clientId) => {
    setClientes(prevClientes => prevClientes.filter(cliente => cliente._id !== clientId));
  };

  const handleAddClient = (newClient) => {
    setClientes(prevClientes => [...prevClientes, newClient]);
  };

  return (
    <div className={styles.pageContainer}>
      {/* Botão para adicionar novo cliente */}
      <button 
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg z-10"
      >
        <PlusCircle size={24} />
      </button>

      {/* Modal para novo cliente */}
      <NewClientModal 
        open={isModalOpen} 
        handleClose={() => setIsModalOpen(false)} 
        onAdd={handleAddClient}
      />

      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.cardsContainer}>
            {clientes.length > 0 ? (
              clientes.map((cliente) => (
                <div key={cliente._id} className={styles.clientCard}>
                  <div className={styles.cardContent}>
                    <div className={styles.basicInfo}>
                      <h2 className={styles.nameClient}>{cliente.name}</h2>
                      <p className={styles.typeInfo}>
                        <b>Busca:</b> {cliente.tipoImovel}
                      </p>
                      <p className={styles.locationInfo}>
                        <b>Região:</b> {cliente.localizacaoDesejada}
                      </p>
                    </div>
                    
                    <div className={styles.middleSection}>
                      <div className={styles.featuresGrid}>
                        <div className={styles.featureItem}>
                          <b>{cliente.requisitos.quartosDesejados}</b> Quartos
                        </div>
                        <div className={styles.featureItem}>
                          <b>{cliente.requisitos.banheirosDesejados}</b> Banheiros
                        </div>
                        <div className={styles.featureItem}>
                          <b>{cliente.requisitos.areaMinima}m²</b> Mínimo
                        </div>
                        <div className={styles.featureItem}>
                          <b>€ {(cliente.valorMaximo / 5.3).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</b> Orçamento
                        </div>
                      </div>
                    </div>

                    <div className={styles.rightSection}>
                      <div className={styles.amenitiesList}>
                        {cliente.requisitos.extras?.map((extra, index) => (
                          <span 
                            key={`${cliente._id}-${index}-${extra}`} 
                            className={styles.amenityTag}
                          >
                            {extra}
                          </span>
                        ))}
                      </div>
                      <div className={styles.contactSection}>
                        <p className={styles.contactInfo}>
                          <b>Contato:</b> {cliente.contact}
                        </p>
                        <div className={styles.emailInfo}>
                          <span><b>Email:</b> {cliente.email}</span>
                        </div>
                          <ArquivarButton onArchive={handleArchive} clientId={cliente._id} />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className={styles.noClients}>Nenhum cliente encontrado</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CardClientPage;