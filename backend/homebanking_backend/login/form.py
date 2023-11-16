from django import forms

class formaLogin(forms.Form):
    nombre = forms.CharField(label="Nombre", required=True, widget=forms.TextInput(attrs={'class': 'nombre','placeholder':'Nombre','id':'nombre'}))
    contraseña = forms.CharField(label="Contraseña", required=True, widget=forms.TextInput(attrs={'class': 'password','placeholder':'Contraseña','id':'password'}))