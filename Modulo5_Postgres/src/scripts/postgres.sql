drop table if exists tb_herois;
create table tb_herois (
    id int generated always as identity primary key not null,
    nome text not null,
    poder text not null
);

--create
insert into tb_herois(nome, poder)
values
    ('Flash', 'Velocidade'),
    ('Aquaman', 'Respirar debaixo d_agua'),
    ('Batman', 'Dinheiro');

--read
select * from tb_herois
select * from tb_herois where nome=''

--update
UPDATE tb_herois
SET nome = value1, poder = value2
WHERE id=''; 

--delete
DELETE FROM tb_herois WHERE id='';