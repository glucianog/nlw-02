import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';

function TeacherList() {  

  const [subject, setSubject] = useState('');
  const [teachers, setTeachers] = useState([]);
  const [time, setTime] = useState('');
  const [week_day, setWeekDay] = useState('');

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    });

    setTeachers(response.data);
  }

  return( 
    <div id="page-teacher-list" className="container"> 
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select 
            name="subject"
            label="Matéria"
            value={subject}
            onChange={e => {setSubject(e.target.value) }}
            options={[
              { value: 'Português', label: 'Português' },
              { value: 'Inglês', label: 'Inglês' },
              { value: 'Espanhol', label: 'Espanhol' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'História', label: 'História' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Química', label: 'Química' },
              { value: 'Física', label: 'Física' },
              { value: 'Laboratórios Especiais', label: 'Laboratórios Especiais' },
            ]}
          />

          <Select 
            name="week-day"
            label="Dia da semana"            
            value={week_day}
            onChange={e => {setWeekDay(e.target.value) }}
            options={[
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          <Input 
            type="time"
            name="time"
            label="Hora"            
            value={time}
            onChange={e => { setTime(e.target.value) }}
            />

          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher}/>
        })}       
      </main>
    </div>
  )
}

export default TeacherList;