---
layout: default
---
# Site content

{% for collection in site.collections %}
  <details>
  <summary>{{ collection.label }}</summary>
  <ul>
  {% for doc in collection.docs %}
  <li><a href="{{doc.url}}">{{doc.title}}</a></li>
  {% endfor %}
  </ul>
  </details>
{% endfor %}
