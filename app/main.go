package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	rotas := mux.NewRouter().StrictSlash(true)

	rotas.HandleFunc("/", getAll).Methods("GET")
	rotas.HandleFunc("/persons", create).Methods("POST")
	rotas.HandleFunc("/persons/{name}", getByName).Methods("GET")
	rotas.HandleFunc("/persons/{name}", deleteByName).Methods("DELETE")
	rotas.HandleFunc("/persons/{name}", updatePerson).Methods("PATCH")
	var port = ":8090"
	fmt.Println("Server running in port:", port)
	log.Fatal(http.ListenAndServe(port, rotas))
}

type Person struct {
	Nome       string
	CPF        string
	Email      string
	Telefone   string
	Endereco   string
	Logradouro string
	Numero     int
	Curso      string
	Materias   []string
	Notas      map[string]float64
}

var persons = []Person{}

func updatePerson(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	nome := params["name"]

	var updatedPerson Person

	for i, p := range persons {
		if p.Nome == nome {
			body, err := ioutil.ReadAll(r.Body)
			if err != nil {
				panic(err)
			}
			if err := r.Body.Close(); err != nil {
				panic(err)
			}
			if err := json.Unmarshal(body, &updatedPerson); err != nil {
				w.Header().Set("Content-Type", "application/json; charset=UTF-8")
				w.WriteHeader(422)
				if err := json.NewEncoder(w).Encode(err); err != nil {
					panic(err)
				}
				return
			}
			persons[i] = updatedPerson
			w.Header().Set("Content-Type", "application/json; charset=UTF-8")
			w.WriteHeader(http.StatusOK)
			json.NewEncoder(w).Encode(updatedPerson)
			return
		}
	}

	w.WriteHeader(http.StatusNotFound)
	fmt.Fprintf(w, "Pessoa com nome %s não encontrada", nome)
}

func deleteByName(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)
	nome := params["name"]

	for i, p := range persons {
		if p.Nome == nome {
			persons = append(persons[:i], persons[i+1:]...)
			fmt.Fprintf(w, "Pessoa com nome %s foi excluída", nome)
			return
		}
	}

	w.WriteHeader(http.StatusNotFound)
	fmt.Fprintf(w, "Pessoa com nome %s não encontrada", nome)
}

func getByName(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	nome := params["name"]

	var personFound Person

	for _, p := range persons {
		if p.Nome == nome {
			personFound = p
			break
		}
	}

	if personFound.Nome == "" {
		w.WriteHeader(http.StatusNotFound)
		fmt.Fprintf(w, "Pessoa com nome %s não encontrada", nome)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(personFound)
}

func getAll(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(persons)
}

func create(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json; charset=UTF-8")

	var p Person

	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		panic(err)
	}

	if err := r.Body.Close(); err != nil {
		panic(err)
	}

	if err := json.Unmarshal(body, &p); err != nil {
		w.Header().Set("Content-Type", "application/json; charset=UTF-8")
		w.WriteHeader(422)
		if err := json.NewEncoder(w).Encode(err); err != nil {
			panic(err)
		}
	}

	persons = append(persons, p)

	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	w.WriteHeader(http.StatusCreated)
	if err := json.NewEncoder(w).Encode(p); err != nil {
		panic(err)
	}
}
