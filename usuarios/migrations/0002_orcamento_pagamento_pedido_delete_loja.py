# Generated by Django 5.1.2 on 2025-02-15 20:54

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('usuarios', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Orcamento',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data_solicitacao', models.DateTimeField(auto_now_add=True)),
                ('status', models.CharField(choices=[('pendente', 'Pendente'), ('aprovado', 'Aprovado'), ('recusado', 'Recusado')], default='pendente', max_length=50)),
                ('valor', models.DecimalField(decimal_places=2, max_digits=10)),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='orcamentos', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Pagamento',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data_pagamento', models.DateTimeField(auto_now_add=True)),
                ('valor', models.DecimalField(decimal_places=2, max_digits=10)),
                ('status', models.CharField(choices=[('pendente', 'Pendente'), ('pago', 'Pago'), ('cancelado', 'Cancelado')], default='pendente', max_length=50)),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='pagamentos', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Pedido',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data_pedido', models.DateTimeField(auto_now_add=True)),
                ('status', models.CharField(choices=[('pendente', 'Pendente'), ('em_andamento', 'Em Andamento'), ('concluido', 'Concluído'), ('cancelado', 'Cancelado')], default='pendente', max_length=50)),
                ('valor_total', models.DecimalField(decimal_places=2, max_digits=10)),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='pedidos', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.DeleteModel(
            name='Loja',
        ),
    ]
