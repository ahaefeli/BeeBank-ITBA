from django import forms

class faqForm(forms.Form):
    name = forms.CharField(label="Nombre",required=True,widget=forms.TextInput(attrs={'class': 'nombre','placeholder':'Nombre','id':'nombre'}))
    surname = forms.CharField(label="Apellido",required=True,widget=forms.TextInput(attrs={'class': 'apellido','placeholder':'Apellido','id':'apellido'}))
    email = forms.EmailField(label="Correo electrónico",required=True,widget=forms.TextInput(attrs={'class': 'mail','placeholder':'Correo electronico','id':'mail'}))
    content = forms.CharField(label="Su consulta",max_length=700,required=True,widget=forms.Textarea(attrs={'class': 'content','placeholder':'Su consulta\nMaximo de 700 caracteres','id':'content'}))