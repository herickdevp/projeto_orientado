-- Inserindo dados na tabela 'usuario'
INSERT INTO usuario (id_usuario, nome_usuario, nivel_usuario, status_usuario)
VALUES 
(1, 'João Silva', 3, TRUE),
(2, 'Maria Oliveira', 2, TRUE),
(3, 'Carlos Souza', 1, FALSE);

-- Inserindo dados na tabela 'aviso_critico'
INSERT INTO aviso_critico (id_ac, texto_ac, status_ac, data_inicio_ac, data_fim_ac)
VALUES 
('AC001', 'Problema crítico no servidor X', TRUE, '2024-06-01 08:00:00', '2024-06-01 12:00:00'),
('AC002', 'Atualização urgente de segurança', TRUE, '2024-06-15 14:00:00', NULL);

-- Inserindo dados na tabela 'falha_sistemica'
INSERT INTO falha_sistemica (id_fs, sistema_afetado_fs, data_abertura_fs, data_fechamento_fs, status_fs, equipe_tratativa_fs, responsavel_fs, descricao_fs)
VALUES 
('FS001', 'Sistema de pagamento', '2024-06-10 09:30:00', '2024-06-10 17:45:00', TRUE, 'Equipe A', 'João Silva', 'Falha no processamento de pagamentos.'),
('FS002', 'Sistema de autenticação', '2024-06-11 11:00:00', NULL, FALSE, 'Equipe B', 'Maria Oliveira', 'Erro na autenticação de usuários.');

-- Inserindo dados na tabela 'falha_massiva'
INSERT INTO falha_massiva (id_fm, os_cor_fm, tipo_fm, aberta_por_fm, localidade_fm, regional_fm, qtd_afetado_fm, qtd_entrante_fm, data_abertura_fm, data_fechamento_fm, banner_fm, data_inicio_banner_fm, data_fim_banner_fm, elemento_afetado_1_fm, elemento_afetado_2_fm, elemento_afetado_3_fm, elemento_afetado_4_fm, elemento_afetado_5_fm, descricao_fm, solucao_fm, status_fm)
VALUES 
('FM001', 'OS001', 'Rede', 'Carlos Souza', 'São Paulo', 'Sudeste', 100, 10, '2024-06-12 13:00:00', NULL, TRUE, '2024-06-12 13:30:00', NULL, 'Roteador A', 'Switch B', 'Servidor C', NULL, NULL, 'Interrupção na rede da região Sudeste.', NULL, FALSE),
('FM002', 'OS002', 'Banco de Dados', 'Maria Oliveira', 'Rio de Janeiro', 'Sudeste', 50, 5, '2024-06-13 08:45:00', '2024-06-13 12:00:00', FALSE, NULL, NULL, 'Banco de Dados D', 'Servidor E', NULL, NULL, NULL, 'Falha no acesso ao banco de dados.', 'Reconfiguração do servidor.', TRUE);

-- Inserindo dados na tabela 'Change_rdm'
INSERT INTO Change_rdm (id_rdm, data_abertura_rdm, data_fechamento_rdm, descricao_rdm, tempo_instabilidade_rdm, cliente_afetado_rdn, sistema_afetadi_rdm, localidade_afetada, status_rdm)
VALUES 
('RDM001', '2024-06-05 09:00:00', '2024-06-05 11:30:00', 'Atualização de software', '2 horas', 'Cliente A', 'Sistema X', 'São Paulo', TRUE),
('RDM002', '2024-06-06 14:00:00', NULL, 'Manutenção preventiva', 'Nenhuma', 'Cliente B', 'Sistema Y', 'Rio de Janeiro', FALSE);
