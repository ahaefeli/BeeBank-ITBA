from  django import forms

class formaRegister(forms.Form):
    email = forms.EmailField(label="Correo electronico:",required=True)
    contraseña = forms.CharField(label="Contraseña:",required=True)
    dni = forms.NumberInput(label="DNI", required=True)