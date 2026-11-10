#!/usr/bin/env python3
"""Lipește toate fișierele din content/ într-un singur data/continut.js (încărcat de aplicație)."""
import os, glob
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
files = sorted(glob.glob(os.path.join(root, 'content', '*.js'))) + \
        sorted(glob.glob(os.path.join(root, 'content', 'capitole', '*.js')), key=lambda f: (os.path.basename(f)[0] != 's', f)) + \
        sorted(glob.glob(os.path.join(root, 'content', 'teste', '*.js'))) + \
        sorted(glob.glob(os.path.join(root, 'content', 'oficiale', '*.js')))
os.makedirs(os.path.join(root, 'data'), exist_ok=True)
with open(os.path.join(root, 'data', 'continut.js'), 'w', encoding='utf-8') as out:
    out.write('/* Generat automat de tools/build.py – editează fișierele din content/ */\n')
    for f in files:
        out.write(f'\n/* ---- {os.path.relpath(f, root)} ---- */\n')
        out.write(open(f, encoding='utf-8').read())
print(len(files), 'fișiere ->', 'data/continut.js')
