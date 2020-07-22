import Vue from 'vue'
import { format } from 'date-fns'

function formatDate (date) {
  // const options = { year: 'numeric', month: 'long', day: 'numeric' }

  return format(new Date(date), 'dd.MM.yyyy')
}

Vue.filter('formatDate', formatDate)
